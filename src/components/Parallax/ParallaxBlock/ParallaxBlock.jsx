import React from 'react';

import ParallaxItem from '../ParallaxItem/ParallaxItem';

import style from './style.module.scss';

const ParallaxBlock = ({ data }) => {
  const createGroup = (groupData) =>
    groupData.map((el) => (
      <ParallaxItem
        key={el.title}
        index={el.id}
        title={el.title}
        subTitle={`${el.subTitle} . . .`}
        pic={el.pic}
      />
    ));

  return <div className={style['paralax-container']}>{createGroup(data)}</div>;
};

export default ParallaxBlock;
