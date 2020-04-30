import React from 'react';

import style from  './style.module.scss';

const Header = () => {
  return ( 
    <header className={ style.header }>
      {'<Logo />'}
      <div className={ style.title }>
        <h1>Hello, I'm Victoria</h1>
        <h2 className="moving-ending moving-cursor">and I'm a frontend developer</h2>
        <p>Nice to see you here</p>
      </div>
      {'<Navigation />'}
    </header>
  );
}
 
export default Header;