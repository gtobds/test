import React from 'react';
import { NavLink } from 'react-router';

import classname from 'classnames/bind';
import css from './Menu.module.scss';
const cx = classname.bind(css);

const Menu = () => {
  const ctg = [
    { id: 0, name: 'new', link: 'new' },
    { id: 1, name: 'sale', link: 'sale' },
  ];
  const ctgItem = ctg.map((ctg) => (
    <li key={ctg.id}>
      <NavLink className={({ isActive }) => (isActive ? cx('active') : undefined)} to={ctg.link}>
        {ctg.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <div className={cx('main-menu')}>
        <ul>{ctgItem}</ul>
      </div>
    </>
  );
};

export default Menu;
