import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CircleMenuItem from '../CircleMenuItem/CircleMenuItem';
import { getData } from '../../../utils';

import style from './style.module.scss';

const CircleMenuBlock = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getData('/api/contacts').then((newContacts) => {
      setContacts(newContacts);
    });
  }, []);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const itemsGroup = useMemo(
    () =>
      contacts?.map((el) => (
        <CircleMenuItem key={el.url} isOpen={isOpen} contact={el} />
      )),
    [contacts, isOpen],
  );

  return (
    <nav className={style.menu}>
      <input
        className={style['menu-toggler']}
        id="menu-toggler"
        type="checkbox"
        value={isOpen}
        onChange={handleClick}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="menu-toggler">
        <FontAwesomeIcon icon={['far', 'envelope']} />
      </label>
      <ul>{itemsGroup}</ul>
    </nav>
  );
};

export default CircleMenuBlock;
