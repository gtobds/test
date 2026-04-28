import React, { useState, useRef } from 'react';

import classname from 'classnames/bind';
import css from './Btn.module.scss';
const cx = classname.bind(css);

const Btn = ({ size = '', type = '', add = '', text = '', onClick, btnRef, press, cart }) => {
  const [isPressed, setIsPressed] = useState(false);
  const fnPressd = () => {
    setIsPressed(!isPressed);
  };

  return (
    <button type='button' className={cx('btn', size, type, add, { noIns: add == 'in', 'cart-on': cart })} ref={btnRef} onClick={press ? fnPressd : onClick} aria-pressed={press && isPressed}>
      <em>{text}</em>
    </button>
  );
};

export default Btn;
