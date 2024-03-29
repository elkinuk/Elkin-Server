import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import style from './style.module.scss';

const LinkSimple = ({
  href,
  children,
  to,
  className,
  zeroStyle,
  withNewPage = true,
}) =>
  href ? (
    <a
      className={clsx(style.link && !zeroStyle, className)}
      href={href}
      target={withNewPage ? '_blank' : null}
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link href={to}>
      <span
        className={clsx(
          !zeroStyle && style.link,
          !zeroStyle && style['link--router'],
          className,
        )}
      >
        {children}
      </span>
    </Link>
  );

export default LinkSimple;
