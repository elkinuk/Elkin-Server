import React from 'react';

import style from './style.module.scss';
import Planet from '../../atoms/Planet';

const PlanetsParade = ({ data }) => {
  const createGroup = () =>
    data.map((el, i) => (
      <div className={style['planet-container']} key={el.title}>
        <h3>{el.title}</h3>
        <p className={style.subtitle}>{el.subtitle}</p>
        <div className={style.planet}>
          <Planet planet={i} />
        </div>
      </div>
    ));
  return <div className={style.container}>{createGroup()}</div>;
};

export default PlanetsParade;
