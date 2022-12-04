import React, { Component } from 'react';

import Link from 'next/link';

import style from './style.module.scss';

class ParalaxItem extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
  }

  state = {
    width: 0, height: 0, mouseX: 0, mouseY: 0, mouseLeaveDelay: null,
  };

  mousePX() {
    return this.state.mouseX / this.state.width;
  }

  mousePY() {
    return this.state.mouseY / this.state.height;
  }

  cardStyle() {
    const rX = this.mousePX() * 30;
    const rY = this.mousePY() * -30;
    return { transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };
  }

  cardBgStyle() {
    const tX = this.mousePX() * -40;
    const tY = this.mousePY() * -40;

    return {
      backgroundImage: `url(${this.props.pic})`,
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
  }

  handleMouseMove(e) {
    const mouseX = e.pageX - this.cardRef.current.offsetLeft - this.state.width / 2;
    const mouseY = e.pageY - this.cardRef.current.offsetTop - this.state.height / 2;
    this.setState({
      mouseX, mouseY,
    });
  }

  handleMouseEnter() {
    clearTimeout(this.state.mouseLeaveDelay);
  }

  handleMouseLeave() {
    const mouseLeaveDelay = setTimeout(() => {
      this.setState({
        mouseX: 0,
        mouseY: 0,
      });
    }, 1000);

    this.setState({ mouseLeaveDelay });
  }

  componentDidMount() {
    this.setState({
      width: this.cardRef.current.offsetWidth,
      height: this.cardRef.current.offsetHeight,
    });
  }

  render() {
    return (
      <Link href="/blog/[id]" as={`/blog/${this.props.index}`}>
        <div
          className={style.wrap}
          onMouseMove={(e) => this.handleMouseMove(e)}
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
          ref={this.cardRef}
        >
          <div className={style.card} style={this.cardStyle()}>
            <div className={style.bg} style={this.cardBgStyle()} />
            <div className={style.info}>
              <h2 className={style.header}>{ this.props.title }</h2>
              <p className={style.content}>{ this.props.subTitle }</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ParalaxItem;
