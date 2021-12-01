import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router';
import axios from 'axios';

import { api } from '../../services/api';
import { Enterprise } from '../../utils/types';

import { ButtonSubmit, Footer } from '../../styles/button';
import { InputContent, Container, Infos, Form } from './styles';

interface FormEnterprisesProps {
  id?: string
}

interface IAddress {
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string,
  cep: string,
  erro?: boolean
}

export function FormEnterprises({ id }: FormEnterprisesProps) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [purpose, setPurpose] = useState('');
  const [cep, setCep] = useState('');
  const [cepIsCorrect, setCepIsCorrect] = useState(false);
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState({} as IAddress);

  useEffect(() => {
    async function loadData() {
      if (id) {
        await api.get<Enterprise>(`/enterprises/${id}`)
          .then((result) => {
            setName(result.data.name);
            setStatus(result.data.status);
            setPurpose(result.data.purpose);
            setCep(result.data.address.cep);
            setNumber(result.data.address.number);
            setAddress({
              logradouro: result.data.address.street,
              bairro: result.data.address.district,
              localidade: result.data.address.city,
              uf: result.data.address.state,
              cep: result.data.address.cep
            });
          }).catch(() => {
            toast.error(`Não foi possível buscar os dados!`, {
              theme: "colored",
            });

            router.replace('/');
          });
      };
    };

    loadData();
  }, []);  // Busca os dados quando editando

  useEffect(() => {
    async function handleSearchCep() {
      setAddress({} as IAddress);
      const cepSearch = cep.replace(/\D/g, '');
      const validateCep = /^[0-9]{8}$/;

      if (validateCep.test(cepSearch)) {
        await axios.get<IAddress>(`https://viacep.com.br/ws/${cep}/json`)
          .then(response => {
            if (!response.data.erro) {
              setAddress(response.data);
              setCepIsCorrect(true);
            } else {
              setAddress({} as IAddress);
              setCepIsCorrect(false);
            };
          }).catch(() => {
            setAddress({} as IAddress);
            setCepIsCorrect(false);
          });
      } else {
        setAddress({} as IAddress);
        setCepIsCorrect(false);
      };
    };

    handleSearchCep();
  }, [cep]); // Busca dados de endereço a partir do cep

  async function handleCreate(event: FormEvent) {
    event.preventDefault();

    await api.get<Enterprise[]>('/enterprises')
      .then(async (result) => {
        const id = `PA${parseInt(result.data[result.data.length - 1].id.replace('PA', '')) + 1}`;

        if (cepIsCorrect) {
          await api.post(`/enterprises/`, {
            id,
            name,
            status,
            purpose,
            ri_number: 123321,
            address: {
              street: address.logradouro,
              number,
              district: address.bairro,
              city: address.localidade,
              state: address.uf,
              cep: address.cep.replace('-', '')
            }
          }).then(async (resultCreate) => {
            if (resultCreate.status === 201) {
              toast.success(`Empreendimento criado com sucesso.`, {
                theme: "colored",
              });

              router.replace('/');
            };
          }).catch(() => {
            toast.error(`Não foi possível criar o empreendimento!`, {
              theme: "colored",
            });

            router.replace('/');
          });
        } else {
          toast.error(`Informe um CEP correto!`, {
            theme: "colored",
          });
        };
      }).catch(() => {
        toast.error(`Não foi possível criar o empreendimento!`, {
          theme: "colored",
        });

        router.replace('/');
      });
  }; // cria um empreendimento

  async function handleEdit(event: FormEvent) {
    event.preventDefault();

    if (cepIsCorrect) {
      await api.patch(`/enterprises/${id}`, {
        id,
        name,
        status,
        purpose,
        ri_number: 123321,
        address: {
          street: address.logradouro,
          number,
          district: address.bairro,
          city: address.localidade,
          state: address.uf,
          cep: address.cep.replace('-', '')
        }
      }).then(async (resultCreate) => {
        if (resultCreate.status === 200) {
          toast.success(`Empreendimento editado com sucesso.`, {
            theme: "colored",
          });

          router.replace('/');
        };
      }).catch(() => {
        toast.error(`Não foi possível editar o empreendimento!`, {
          theme: "colored",
        });

        router.replace('/');
      });
    } else {
      toast.error(`Informe um CEP correto!`, {
        theme: "colored",
      });
    };
  }; // edita um empreendimento

  return (
    <Form onSubmit={id ? handleEdit : handleCreate}>
      <Container>
        <h3>Informações</h3>

        <InputContent>
          <select
            placeholder="Lançamento"
            value={status}
            required={true}
            onChange={event => setStatus(event.target.value)}
          >
            <option value="" disabled selected>Status</option>
            <option value="RELEASE">Lançamento</option>
            <option value="BUILDING">Em obras</option>
            <option value="READY">Pronto para morar</option>
            <option value="SOON">Breve lançamento</option>
          </select>
        </InputContent>

        <InputContent>
          <input
            placeholder="Nome do empreendimento"
            value={name}
            required={true}
            onChange={event => setName(event.target.value)}
          />
        </InputContent>

        <InputContent>
          <select
            placeholder="Lançamento"
            value={purpose}
            required={true}
            onChange={event => setPurpose(event.target.value)}
          >
            <option value="" disabled selected>Propósito</option>
            <option value="HOME">Residencial</option>
            <option value="COMMERCE">Comercial</option>
          </select>
        </InputContent>

        <InputContent>
          <input
            placeholder="CEP"
            value={address.cep ? address.cep : cep}
            required={true}
            onChange={event => event.target.value.length <= 9 && setCep(event.target.value)}
          />
        </InputContent>

        {
          address.cep && (
            <Infos>
              {address.logradouro},<br />
              {address.bairro}<br />
              {address.localidade}<br />
              {address.uf}
            </Infos>
          )
        }

        <InputContent>
          <input
            placeholder="339"
            value={number}
            required={true}
            onChange={event => setNumber(event.target.value)}
          />
        </InputContent>
      </Container>

      <Footer>
        <ButtonSubmit
          type="submit"
          // className={`footer ${searchText != '' || loadButtonDisabled ? 'disabled' : ''}`}
          className={`footer`}
        >
          Cadastrar
        </ButtonSubmit>
      </Footer>
    </Form>
  );
};