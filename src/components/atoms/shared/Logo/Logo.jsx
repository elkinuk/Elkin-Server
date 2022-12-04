import React from 'react';

import style from './style.module.scss';

const Logo = () => (
  <a
    href="https://github.com/elkinny"
    target="_blank"
    rel="noreferrer"
  >
    <img
      className={style.logo}
      src="/img/orca.png"
      alt="elkin logo"
      width="80"
      height="80"
    />
  </a>
);

export default Logo;
