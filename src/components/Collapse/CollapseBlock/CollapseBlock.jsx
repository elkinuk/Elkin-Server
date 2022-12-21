import React, { useState } from 'react';

import CollapseItem from '../CollapseItem/CollapseItem';

import style from './style.module.scss';

const CollapseBlock = ({ data }) => {
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = (id) => {
    if (id !== activeCard) {
      setActiveCard(id);
    }
  };

  const createGroup = (groupData) =>
    groupData.map((item, index) => (
      <CollapseItem
        data={item}
        key={item.url}
        isActive={activeCard === index}
        handleClick={() => handleClick(index)}
      />
    ));

  return <div className={style.collapse}>{createGroup(data)}</div>;
};

export default CollapseBlock;
