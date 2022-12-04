import React, { Component } from 'react';

import style from './style.module.scss';

class PaperItem extends Component {
  render() {
    const {
      type, handleTogglePaper, children,
    } = this.props;
    const isShown = this.props.type === this.props.openPaper;
    const typeStyle = style[`paper--${type}`];
    const activeStyle = isShown ? style['paper--active'] : '';
    const shakingStyle = !isShown ? style.shake : '';

    return (
      <div
        className={`${style.paper} ${typeStyle} ${activeStyle} ${shakingStyle}`}
        onClick={() => handleTogglePaper(type)}
      >
        { children }
      </div>
    );
  }
}

export default PaperItem;
