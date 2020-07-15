import React from 'react';

import { Logo, Navigation } from './../../atoms/shared';

import style from  './style.module.scss';

const Header = () => {
  return ( 
    <header className={ style.header }>
      <Logo />
      {/* <Navigation /> */}
    </header>
  );
}
 
export default Header;