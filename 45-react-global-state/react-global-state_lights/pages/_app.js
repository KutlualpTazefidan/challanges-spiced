import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import Lights from "../components/Lights";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
