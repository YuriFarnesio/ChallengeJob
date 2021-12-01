import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-gray: #F0F2F5;
    --bg-white: #FFFFFF;

    --brandcolor-primary-default: #4F46BB;
    --brandcolor-primary-light: #8E85FF;
    --outline-gray-dark: #BBB8D9;

    --textcolor-primary: #302E45;
    --textcolor-secondary: #6D6C7B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--bg-gray);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
