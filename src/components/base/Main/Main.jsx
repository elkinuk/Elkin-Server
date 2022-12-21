import React from 'react';

import CircleMenu from '../../CircleMenu';

import style from './style.module.scss';

const Main = ({ children }) => (
  <main className={style.main}>
    {children}
    <CircleMenu />
  </main>
);

export default Main;
