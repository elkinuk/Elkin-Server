import React from 'react';

import { Logo } from '../../shared';

import style from './style.module.scss';

const Header = () => (
  <header className={style.header}>
    <Logo />
    {/* <Navigation /> */}
  </header>
);

export default Header;
