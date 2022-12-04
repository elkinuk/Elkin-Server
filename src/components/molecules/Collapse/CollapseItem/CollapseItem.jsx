/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './style.module.scss';

import { LinkSimple } from '../../../atoms/shared';

const CollapseItem = ({
  data, isActive, handleClick,
}) => {
  const getPic = () => {
    const [pic, picBlur] = data;

    return isActive || !picBlur ? pic : picBlur;
  };

  return (
    <div
      className={`${style.card} ${(isActive ? style.active : '')}`}
      style={{ '--optionBackground': `url("${getPic()}")`,
        '--optionColour': data.iconColour }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={style.label}>
        <div className={style.icon}>
          <FontAwesomeIcon icon={data.icon} />
        </div>
        <div className={style.info}>
          <div className={style.main}>{ data.name }</div>
          <div className={style.sub}>{ data.text }</div>
          <div className={style.link}>
            <LinkSimple href={data.url}>Let&apos;s see</LinkSimple>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;
