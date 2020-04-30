import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './style.module.scss';

import { LinkSimple } from './../../../atoms/shared';

class CollapseItem extends Component {
  getPic() {
    const current = this.props.data.pic;
    const currentBlur = this.props.data.picBlur;

    return this.props.isActive || !currentBlur ? current : currentBlur;
  }

  render() { 
    return ( 
      <div
        className={`${style.card} ${(this.props.isActive ? style.active : '')}`}
        style={{
          '--optionBackground': `url("${this.getPic()}")`,
          '--optionColour': this.props.data.iconColour
        }}
        onClick={this.props.handleClick}
      >
        <div className={style.label}>
          <div className={style.icon}>
            <FontAwesomeIcon icon={ this.props.data.icon } />
          </div>
          <div className={style.info}>
            <div className={style.main}>{ this.props.data.name }</div>
            <div className={style.sub}>{ this.props.data.text }</div>
            <div className={style.link}>
              <LinkSimple href={ this.props.data.url }>Let's see</LinkSimple>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default CollapseItem;