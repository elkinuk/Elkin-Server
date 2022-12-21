import React from 'react';

import { Header, Main, Footer } from '../components/base';

import './style.scss';
import '../utils/icons';

const MyApp = ({ Component, pageProps }) => (
  <div className="main">
    <div className="wrapper">
      <Header />
      <Main>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  </div>
);

export default MyApp;
