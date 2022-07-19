import React from "react";
import { AppProps } from "next/app";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { Layout, Header, Footer } from "components";

import "../styles/index.css";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout title='Dre'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </Web3ReactProvider>
  );
}

export default MyApp;
