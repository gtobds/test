import React from 'react';

import classname from 'classnames/bind';
import scss from './Disp.module.scss';
const cx = classname.bind(scss);

const NewList = () => {
  return <div className={cx('disp-outlet')}>NewList</div>;
};

export default NewList;
