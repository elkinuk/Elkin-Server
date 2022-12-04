import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CircleMenuItem from '../CircleMenuItem/CircleMenuItem';
import { getData } from '../../../../assets/utils.js';

import style from './style.module.scss';

class CircleMenuBlock extends Component {
  state = {
    contacts: [],
    isOpen: false,
  };

  async componentDidMount() {
    const contacts = await getData('/api/contacts');
    this.setState({ contacts });
  }

  handleClick() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  createGroup(data) {
    return data.map((el) => (
      <CircleMenuItem
        key={el._id}
        isOpen={this.state.isOpen}
        contact={el}
      />
    ));
  }

  render() {
    return (
      <nav className={style.menu}>
        <input
          className={style['menu-toggler']}
          id="menu-toggler"
          type="checkbox"
          value={this.state.isOpen}
          onChange={() => this.handleClick()}
        />
        <label htmlFor="menu-toggler">
          <FontAwesomeIcon icon={['far', 'envelope']} />
        </label>
        <ul>
          { this.createGroup(this.state.contacts) }
        </ul>
      </nav>
    );
  }
}

export default CircleMenuBlock;
