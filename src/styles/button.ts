import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  background: var(--brandcolor-primary-default);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.25rem;
  border: 0;
  padding: 0.625rem 2.5rem;
  border-radius: 2.25rem;

  transition: filter 0.2s;

  p {
    color: var(--bg-white);

    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
  }

  svg {
    color: var(--bg-white);

    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &.footer {
    display: inline-block;

    margin: 3rem auto 0;
  }

  &.disabled {
    opacity: 0.6;
  }

  &.invisible {
    display: none;
  }

  @media (max-width: 720px) {
    &.header {
      padding: 0.625rem 1.5rem;

      p {
        display: none;
      }

      svg {
        width: 1rem;
        height: 1rem;
        margin: 0rem;
      }
    }
  }
`;

export const ButtonSubmit = styled.button`
  background: var(--brandcolor-primary-default);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.25rem;
  border: 0;
  padding: 0.625rem 2.5rem;
  border-radius: 2.25rem;

  transition: filter 0.2s;

  color: var(--bg-white);

  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;

  &:hover {
    filter: brightness(0.9);
  }

  &.footer {
    display: inline-block;

    margin: 3rem auto;
  }
`;
