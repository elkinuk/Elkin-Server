import React from 'react';
import Link from 'next/link';

import style from './style.module.scss';

const LinkSimple = (props) => (
  <>
    {
    props.href
      ? (
        <a v-if="href" className={style.link} href={props.href} target="_blank" rel="noreferrer">
          { props.children }
        </a>
      )
      : (
        <Link href={props.to}>
          <a className={`${style.link} ${style['link--router']}`}>{ props.children }</a>
        </Link>
      )
  }
  </>
);

export default LinkSimple;