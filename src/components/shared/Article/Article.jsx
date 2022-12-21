import React, { useMemo } from 'react';

import style from './style.module.scss';

const Article = ({ title, text = [] }) => {
  const group = useMemo(
    () =>
      text?.map((el) => (
        <p className={style.paragraph} key={el}>
          {el}
        </p>
      )),
    [],
  );

  return (
    <article className={style.article}>
      {title && <h2 className={style.title}>{title}</h2>}
      {text.length && group}
    </article>
  );
};

export default Article;
