import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-white);

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.25rem;

  & + .enterprise {
    margin-top: 2rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .title {
    display: flex;
    align-items: center;

    h3 {
      color: var(--textcolor-primary);

      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.25rem;

      margin-right: 1.125rem;
    }

    svg {
      color: var(--brandcolor-primary-default);
      cursor: pointer;

      width: 1.125rem;
      height: 1.125rem;

      & + svg {
        margin-left: 0.625rem;
      }
    }
  }

  .address {
    color: var(--textcolor-secondary);

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 0.875rem;

    margin-top: 1rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .tag {
    background: transparent;
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.75rem;
    border: 1px solid var(--brandcolor-primary-light);
    padding: 0.5rem 1.5rem;
    border-radius: 1.75rem;

    p {
      color: var(--textcolor-primary);

      font-size: 0.75rem;
      font-weight: 400;
      line-height: 0.75rem;
    }

    & + .tag {
      margin-left: 1rem;
    }

    @media (max-width: 720px) {
      margin-top: 1rem;
    }
  }
`;
