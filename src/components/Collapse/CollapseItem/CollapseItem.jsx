/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './style.module.scss';

import { LinkSimple } from '../../shared';

const CollapseItem = ({ data = {}, isActive = false, handleClick }) => {
  const { pic, picBlur, icon, iconColour, name, text, url } = data;

  const picUrl = isActive || !picBlur ? pic : picBlur;

  return (
    <div
      className={`${style.card} ${isActive ? style.active : ''}`}
      style={{
        '--optionBackground': `url("${picUrl}")`,
        '--optionColour': iconColour,
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={style.label}>
        <div className={style.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={style.info}>
          <div className={style.main}>{name}</div>
          <div className={style.sub}>{text}</div>
          <div className={style.link}>
            <LinkSimple href={url}>Let&apos;s see</LinkSimple>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;
