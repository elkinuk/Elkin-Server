import React from 'react';

import style from './style.module.scss';

const Article = props => {
  const createGroup = data => 
    data.map((el, index) => 
      (<p className={ style.paragraph } key={index}>{ el }</p>)
    )

  return ( 
    <article className={ style.article }>
      { props.title ? <h2 className={ style.title }>{ props.title }</h2> : null }
      { props.text ? createGroup(props.text) : null }
    </article>
   );
}
 
export default Article;