import React from 'react';

import { LinkSimple } from './../../../atoms/shared';

import style from './style.module.scss'

const Navigation = () => {
  return ( 
    <nav className={style.navigation}>
      <LinkSimple to="/">Home</LinkSimple>
      <LinkSimple to="/blog">Blog</LinkSimple>
      <LinkSimple to="/fiddles">Fiddles</LinkSimple>
    </nav>
  );
}
 
export default Navigation;