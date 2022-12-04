import React from 'react';

import ParalaxItem from '../ParalaxItem/ParalaxItem';

import style from './style.module.scss';

const ParalaxBlock = ({ data }) => {
  const createGroup = (groupData) => groupData.map((el) => (
    <ParalaxItem
      key={el._id}
      index={el.id}
      title={el.title}
      subTitle={`${el.subTitle} . . .`}
      pic={el.pic}
    />
  ));

  return (
    <div className={style['paralax-container']}>
      { createGroup(data) }
    </div>
  );
};

export default ParalaxBlock;
