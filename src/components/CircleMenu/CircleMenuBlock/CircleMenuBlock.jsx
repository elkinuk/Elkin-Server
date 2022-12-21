import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CircleMenuItem from '../CircleMenuItem/CircleMenuItem';
import { getData } from '../../../assets/utils';

import style from './style.module.scss';

const CircleMenuBlock = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const newContacts = await getData('/api/contacts');
      setContacts(newContacts);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const createGroup = (data) =>
    data.map((el) => (
      <CircleMenuItem key={el.url} isOpen={isOpen} contact={el} />
    ));

  return (
    <nav className={style.menu}>
      <input
        className={style['menu-toggler']}
        id="menu-toggler"
        type="checkbox"
        value={isOpen}
        onChange={() => handleClick()}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="menu-toggler">
        <FontAwesomeIcon icon={['far', 'envelope']} />
      </label>
      <ul>{createGroup(contacts)}</ul>
    </nav>
  );
};

export default CircleMenuBlock;
