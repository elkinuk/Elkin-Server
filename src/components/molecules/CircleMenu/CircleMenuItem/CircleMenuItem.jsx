import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './style.module.scss';

const CircleMenuItem = ({
  contact, isOpen,
}) => (
  <li className={`${style.item} ${isOpen ? style['item--active'] : ''}`}>
    <a className={style.link} href={contact.url} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={contact.icon} />
    </a>
  </li>
);

export default CircleMenuItem;
