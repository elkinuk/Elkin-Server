import React from 'react';

import Greetings from './Greetings';

import style from './style.module.scss';

const GreetingsBlock = () => (
  <div className={style.block}>
    <Greetings />
  </div>
);

export default GreetingsBlock;
