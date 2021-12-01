import React from 'react';
import { toast } from 'react-toastify';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { useRouter } from 'next/router';

import { api } from '../../services/api';
import { Enterprise } from '../../utils/types';

import { Container, Infos, Tags } from './styles';

interface EnterprisesProps {
  enterprises: Enterprise[],
  setEnterprises: ([]) => void,
  page: number
}

export function Enterprises({ enterprises, setEnterprises, page }: EnterprisesProps) {
  const router = useRouter();

  async function handleDelete(id: string) {
    await api.delete(`/enterprises/${id}`)
      .then(async (resultDelete) => {
        if (resultDelete.status === 200) {
          const result = await api.get<Enterprise[]>(`/enterprises?_start=${0}&_end=${page * 10}`);

          setEnterprises(result.data);
          toast.success(`Empreendimento deletado com sucesso.`, {
            theme: "colored",
          });
        };
      }).catch(() => {
        toast.error(`Não foi possível deletar o empreendimento!`, {
          theme: "colored",
        });
      });
  }; // deleta um empreendimento

  return (
    <>
      {
        enterprises.map((enterprise) => (
          <Container key={enterprise.id} className="enterprise">
            <Infos>
              <div className="title">
                <h3>{enterprise.name}</h3>

                <MdOutlineModeEditOutline onClick={() => router.replace(`/edit/${enterprise.id}`)} />
                <MdDeleteOutline onClick={() => handleDelete(enterprise.id)} />
              </div>

              <span className="address">
                {enterprise.address.street}, {enterprise.address.number} - {enterprise.address.district}, {enterprise.address.city}, {enterprise.address.state}
              </span>
            </Infos>

            <Tags>
              <div className="tag">
                <p>
                  {
                    enterprise.status === 'RELEASE' ? "Lançamento" :
                      (enterprise.status === 'BUILDING' ? "Em obras" :
                        (enterprise.status === 'READY' ? "Pronto para morar" :
                          (enterprise.status === 'SOON' ? "Breve lançamento" : "")))
                  }</p>
              </div>
              <div className="tag">
                <p>
                  {
                    enterprise.purpose === 'HOME' ? "Residencial" :
                      (enterprise.purpose === 'COMMERCE' ? "Comercial" : "")
                  }
                </p>
              </div>
            </Tags>
          </Container>
        ))
      }
    </>
  );
};