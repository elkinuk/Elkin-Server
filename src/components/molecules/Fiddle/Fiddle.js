import React, { Component } from 'react';

import {
  Article, LinkSimple,
} from '../../atoms/shared';

import style from './style.module.scss';

const Fiddle = ({
  keyHash, config, text, title,
}) => {
  const getUrl = () => `//jsfiddle.net/elkin_uk/${keyHash}/embedded/${config}/dark/`;

  return (
    <div className={style.fiddle}>
      <Article text={text} title={title} className={style.fiddle__article} />
      <LinkSimple href={getUrl()}>
        Fullscreen fiddle
      </LinkSimple>
      <div className={style.fiddle__item}>
        <iframe
          className={style.fiddle__iframe}
          width="100%"
          height="300"
          src={getUrl()}
          allowfullscreen="allowfullscreen"
          allowpaymentrequest
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Fiddle;
