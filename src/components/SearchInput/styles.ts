import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1140px;
  margin: 1.5rem auto 5.375rem auto;
  padding-bottom: 1rem;

  border-bottom: 2px solid var(--outline-gray-dark);

  svg {
    width: 1rem;
    height: 1rem;
  }

  input {
    background: transparent;

    width: 100%;
    margin-left: 1.125rem;
    border: 0;

    color: var(--textcolor-primary);

    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
