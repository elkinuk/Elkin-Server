import React from 'react';

import Greating from './../../atoms/Greating';

import style from './style.module.scss'

const GreatingBlock = () => ( 
  <div className={ style.block }>
    <Greating />
  </div>
);
 
export default GreatingBlock;