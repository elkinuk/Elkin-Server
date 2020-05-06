import React from 'react';

import style from './style.module.scss';

import { Article } from './../../atoms/shared';

const ArticleWithPic = ({ text, pic }) => {
  return ( 
    <>
      <div className={ style.pic } style={{ backgroundImage: `url(${pic})` }}></div>
      <Article text={ text || [] } className={ style.article } />
    </>
   );
}
 
export default ArticleWithPic;