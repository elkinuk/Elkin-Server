import React from 'react';

import style from  './style.module.scss';

const Greating = () => {
  return ( 
    <div className={ style.greating }>
      <h1 className={ style.title }>Hello, my name is Victoria</h1>
      <h2 className={`${style.subtitle} moving-cursor`}>and I'm a frontend developer</h2>
      <p className={ style.comment }>Nice to see you here</p>
    </div>
  );
}
 
export default Greating;