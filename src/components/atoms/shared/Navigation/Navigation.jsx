import React from 'react';

import { LinkSimple } from '..';

import style from './style.module.scss';

const Navigation = () => (
  <nav className={style.navigation}>
    <LinkSimple to="/">Home</LinkSimple>
    <LinkSimple to="/blog">Blog</LinkSimple>
    <LinkSimple to="/fiddles">Fiddles</LinkSimple>
  </nav>
);

export default Navigation;
