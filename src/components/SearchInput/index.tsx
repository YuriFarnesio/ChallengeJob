import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

interface SearchInputProps {
  searchText: string,
  setSearchText: (value: string) => void
}

export function SearchInput({ searchText, setSearchText }: SearchInputProps) {
  return (
    <Container>
      <MdSearch />

      <input
        placeholder="Buscar"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
    </Container>
  );
};