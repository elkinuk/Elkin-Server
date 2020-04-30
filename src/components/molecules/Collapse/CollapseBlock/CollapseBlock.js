import React, { Component } from 'react';

import CollapseItem from './../CollapseItem/CollapseItem';

import './style.module.scss';

class CollapseBlock extends Component {
  state = { 
    activeCard: 0
  }

  handleClick(id) {
    if (id !== this.state.activeCard) {
      this.setState({activeCard: id});
    }
  }

  createGroup(data) {
    return data.map((item, index) => 
      <CollapseItem
          data={item}
          key={item._id}
          isActive={this.state.activeCard === index}
          handleClick={() => this.handleClick(index)}
        />
    );
  }

  render() { 
    return ( 
      <div className="collapse">
        {this.createGroup(this.props.data)}
      </div>
     );
  }
}
 
export default CollapseBlock;
