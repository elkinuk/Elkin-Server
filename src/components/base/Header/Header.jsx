import React from 'react';

import { LinkSimple, Logo } from '../../shared';

import style from './style.module.scss';

const Header = () => (
  <header className={style.header}>
    <LinkSimple to="/" zeroStyle>
      <Logo />
    </LinkSimple>
  </header>
);

export default Header;
