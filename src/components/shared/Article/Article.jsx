/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useMemo } from 'react';

import style from './style.module.scss';

const HEADERS_MAP = [
  (args) => <h1 {...args}>{args.children}</h1>,
  (args) => <h2 {...args}>{args.children}</h2>,
  (args) => <h3 {...args}>{args.children}</h3>,
  (args) => <h4 {...args}>{args.children}</h4>,
  (args) => <h5 {...args}>{args.children}</h5>,
  (args) => <h6 {...args}>{args.children}</h6>,
];

const DEFAULT_COMPONENT = (args) => <p {...args}>{args.children}</p>;

const Article = ({
  title,
  text = [],
  subTitle,
  children,
  headerType = 4,
  id,
}) => {
  const group = useMemo(
    () =>
      text?.map((el) => (
        <p className={style.paragraph} key={el}>
          {el}
        </p>
      )),
    [text],
  );

  const TitleComponent = HEADERS_MAP[headerType - 1] || DEFAULT_COMPONENT;
  const SubTitleComponent = DEFAULT_COMPONENT;

  return (
    <article className={style.article} id={id}>
      {title && (
        <TitleComponent className={style.title}>{title}</TitleComponent>
      )}
      {subTitle && (
        <SubTitleComponent className={style.subTitle}>
          {subTitle}
        </SubTitleComponent>
      )}
      {children}
      {group}
    </article>
  );
};

export default Article;
