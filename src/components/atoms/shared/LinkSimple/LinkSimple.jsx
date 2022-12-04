import React from 'react';
import Link from 'next/link';

import style from './style.module.scss';

const LinkSimple = ({ href, children, to }) =>
  href ? (
    <a className={style.link} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={to}>
      <span className={`${style.link} ${style['link--router']}`}>
        {children}
      </span>
    </Link>
  );

export default LinkSimple;
