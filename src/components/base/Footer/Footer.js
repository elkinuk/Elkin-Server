import React from 'react';

import style from './style.module.scss';

const Footer = () => {
  return ( 
    <footer className={ style.footer }>
      <h6 className="text-align--center">
        Copyrighted (c) { new Date().getFullYear() } elkin
      </h6>
    </footer>
   );
}
 
export default Footer;