import { ToastContainer } from "react-toastify";
import type { AppProps } from 'next/app';


import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
