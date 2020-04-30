import React from 'react';

import style from  './style.module.scss';

const Main = props => {
  return ( 
    <main className={ style.main }>
      { props.children }
      {'<CircleMenu />'}
    </main>
   );
}
 
export default Main;