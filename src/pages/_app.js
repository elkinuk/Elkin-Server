import React from 'react';

import { Header, Main, Footer } from './../components/base';

import './style.module.scss';
import './styles/_icons.js';

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  )
}

export default MyApp