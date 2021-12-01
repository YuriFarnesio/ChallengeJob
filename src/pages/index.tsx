import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { api } from '../services/api';
import { Enterprise } from '../utils/types';

import { Header } from '../components/Header';
import { Enterprises } from '../components/Enterprises';
import { SearchInput } from '../components/SearchInput';

import { Button, Footer } from '../styles/button';

interface HomeProps {
  enterprisesInitial: Enterprise[]
}

export default function Home({ enterprisesInitial }: HomeProps) {
  const router = useRouter();

  const [filteredEnterprises, setFilteredEnterprises] = useState<Enterprise[]>(enterprisesInitial); // lista de empreendimentos quando filtrado
  const [enterprises, setEnterprises] = useState<Enterprise[]>(enterprisesInitial); // lista de empreendimentos

  const [page, setPage] = useState(1); // qual página esta no momento
  const [loadButtonDisabled, setLoadButtonDisabled] = useState(false); // se o botão de carregar mais esta desabilitado

  const [searchText, setSearchText] = useState(''); // texto do input de search

  useEffect(() => {
    async function nextPageExists() {
      const resultNext = await api.get<Enterprise[]>(`/enterprises?_page=${page + 1}&_limit=10`);

      if (resultNext.data.length === 0) {
        setLoadButtonDisabled(true);
      };
    };

    nextPageExists();
  }, [page]); // Verifica se existe uma outra página apos, se não desabilita o botão

  useEffect(() => {
    async function filterArrayEnterprises() {
      if (searchText != '') {
        const result = await api.get<Enterprise[]>(`/enterprises`);

        const filteredEnterprises = result.data.filter((enterprise) => {
          return enterprise.name.toLowerCase().includes(searchText.toLowerCase());
        });

        setFilteredEnterprises(filteredEnterprises);
      };
    };

    filterArrayEnterprises();
  }, [searchText]); // Verifica quais itens do array tem o texto inserido e filtra a lista de empreendimentos

  async function handleLoadMore() {
    const result = await api.get<Enterprise[]>(`/enterprises?_page=${page + 1}&_limit=10`);

    if (result.status === 200) {
      setEnterprises([...enterprises, ...result.data]);
      setPage(page + 1);
    };
  } // faz a busca de uma nova pagina

  return (
    <>
      <Head>
        <title>Início | Empreendimentos</title>
      </Head>

      <Header
        titleIcon={false}
        title="Empreendimentos"
        rightButton={true}
        rightButtonIcon={true}
        onClickButton={() => router.replace('/create')}
      />

      <div style={{ padding: '0 1rem 3rem' }}>
        <SearchInput searchText={searchText} setSearchText={setSearchText} />

        <Enterprises enterprises={searchText != '' ? filteredEnterprises : enterprises} setEnterprises={setEnterprises} page={page} />

        <Footer>
          <Button
            className={`footer ${loadButtonDisabled ? 'disabled' : ''} ${searchText != '' ? 'invisible' : ''}`}
            onClick={handleLoadMore}
          >
            <p>Carregar mais</p>
          </Button>
        </Footer>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await api.get<Enterprise[]>('/enterprises?_page=1&_limit=10');

  return {
    props: {
      enterprisesInitial: result.status === 200 ? result.data : []
    }
  };
};