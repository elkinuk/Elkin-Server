import React from 'react';

import style from './style.module.scss';

const LinkSimple = (props) => (
  <>
  {
    props.href ?
      <a v-if="href" className={ style.link }href={props.href} target="_blank">{props.children}</a> :
      'TBD:Router Link'
  }
  </>
);

export default LinkSimple;