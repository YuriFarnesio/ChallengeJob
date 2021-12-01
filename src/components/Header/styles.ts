import styled from "styled-components";

export const Container = styled.header`
  background: var(--bg-white);

  padding: 0 1rem;
`;

export const Content = styled.header`
  max-width: 1172px;
  height: 80px;
  margin: 0 auto;

  padding: auto 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--brandcolor-primary-default);
      cursor: pointer;

      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem;
    }

    h1 {
      color: var(--brandcolor-primary-default);

      font-size: 1.5rem;
      font-family: "Montserrat", "Inter", sans-serif;
      font-weight: 700;
      line-height: 1.5rem;
    }
  }
`;
