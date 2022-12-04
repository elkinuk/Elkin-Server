import React from 'react';

import {
  Header, Main, Footer,
} from '../components/base';

import './style.scss';
import '../assets/icons.js';

const MyApp = ({
  Component, pageProps,
}) => (
  <div className="main">
    <div className="wrapper">
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  </div>
);

export default MyApp;
