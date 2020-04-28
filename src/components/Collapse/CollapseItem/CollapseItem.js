import React, { Component } from 'react';

import './style.scss';

class CollapseItem extends Component {
  getPic() {
    const current = this.props.data.pic;
    const currentBlur = this.props.data.picBlur;

    return this.props.isActive || !currentBlur ? current : currentBlur;
  }

  render() { 
    return ( 
      <div
        className={`card${this.props.isActive ? ' active' : ''}`}
        style={{
          '--optionBackground': `url("${this.getPic()}")`,
          '--optionColour': this.props.data.iconColour
        }}
        onClick={this.props.handleClick}
      >
        <div className="label">
          <div className="icon">
            { this.props.data.icon }
          </div>
          <div className="info">
            <div className="main">{ this.props.data.name }</div>
            <div className="sub">{ this.props.data.text }</div>
            <div className="link">
              link
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default CollapseItem;