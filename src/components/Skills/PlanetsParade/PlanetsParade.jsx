import React, { useMemo } from 'react';

import style from './style.module.scss';
import Planet from './Planet';

const PlanetsParade = ({ data = [] }) => {
  const planetsGroup = useMemo(
    () =>
      data?.map(({ title, subtitle }, i) => (
        <div className={style['planet-container']} key={title}>
          <h3>{title}</h3>
          <p className={style.subtitle}>{subtitle}</p>
          <div className={style.planet}>
            <Planet planet={i} />
          </div>
        </div>
      )),
    [data],
  );
  return <div className={style.container}>{planetsGroup}</div>;
};

export default PlanetsParade;
