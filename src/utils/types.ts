export interface Enterprise {
  id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
}
