import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LinkSimple } from '../../shared';

import style from './style.module.scss';

const CircleMenuItem = ({ contact = {}, isOpen = false }) => {
  const { url, icon } = contact;

  return (
    <li className={clsx(style.item, isOpen && style['item--active'])}>
      <LinkSimple className={style.link} href={url} zeroStyle>
        <FontAwesomeIcon icon={icon} />
      </LinkSimple>
    </li>
  );
};
export default CircleMenuItem;
