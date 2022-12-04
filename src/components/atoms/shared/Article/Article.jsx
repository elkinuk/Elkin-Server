import React from 'react';

import style from './style.module.scss';

const Article = ({ title, text }) => {
  const createGroup = (data) =>
    data.map((el) => (
      <p className={style.paragraph} key={el}>
        {el}
      </p>
    ));

  return (
    <article className={style.article}>
      {title ? <h2 className={style.title}>{title}</h2> : null}
      {text ? createGroup(text) : null}
    </article>
  );
};

export default Article;
