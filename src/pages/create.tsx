import Head from 'next/head';

import { Header } from '../components/Header';
import { FormEnterprises } from '../components/FormEnterprises';

export default function Create() {
  return (
    <>
      <Head>
        <title>Cadastro | Empreendimentos</title>
      </Head>


      <Header
        titleIcon={true}
        title="Cadastro de empreendimento"
        rightButton={false}
        rightButtonIcon={false}
      />

      <FormEnterprises />
    </>
  );
};