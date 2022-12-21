import React, { useState, useCallback, useMemo } from 'react';

import CollapseItem from '../CollapseItem/CollapseItem';

import style from './style.module.scss';

const CollapseBlock = ({ data = [] }) => {
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = useCallback(
    (id) => {
      if (id !== activeCard) {
        setActiveCard(id);
      }
    },
    [activeCard],
  );

  const collapseItems = useMemo(
    () =>
      data?.map((item, index) => (
        <CollapseItem
          data={item}
          key={item.url}
          isActive={activeCard === index}
          handleClick={() => handleClick(index)}
        />
      )),
    [data, activeCard],
  );

  return <div className={style.collapse}>{collapseItems}</div>;
};

export default CollapseBlock;
