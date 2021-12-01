import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '../../components/Header';
import { FormEnterprises } from '../../components/FormEnterprises';

export default function Edit() {
  const router = useRouter();
  const { edit } = router.query;

  return (
    <>
      <Head>
        <title>Editar | Empreendimentos</title>
      </Head>


      <Header
        titleIcon={true}
        title="Editar empreendimento"
        rightButton={false}
        rightButtonIcon={false}
      />

      <FormEnterprises id={edit?.toString()} />
    </>
  );
};