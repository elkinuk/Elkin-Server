import React from 'react';

import style from './style.module.scss';

const Logo = () => (
  <img
    className={style.logo}
    src="/img/orca.png"
    alt="elkin logo"
    width="80"
    height="80"
  />
);

export default Logo;
