import styled from "styled-components";

export const Form = styled.form`
  padding: 0 1rem;
  margin: 3rem 0;
`;

export const Container = styled.div`
  background: var(--bg-white);

  width: 100%;
  max-width: 662px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;

  h3 {
    color: var(--textcolor-primary);

    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.125rem;
    margin-bottom: 3rem;
  }
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;

  border-bottom: 2px solid var(--outline-gray-dark);

  select {
    width: 100%;
    border: 0;

    color: var(--textcolor-primary);

    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    font-family: "Inter";

    &:focus {
      outline: none;
    }
  }

  input {
    background: transparent;

    width: 100%;
    border: 0;

    color: var(--textcolor-primary);

    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;

    &:focus {
      outline: none;
    }
  }

  & + div {
    margin-top: 2.25rem;
  }
`;

export const Infos = styled.span`
  color: var(--textcolor-primary);

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;

  & + div {
    margin-top: 2.25rem;
  }
`;
