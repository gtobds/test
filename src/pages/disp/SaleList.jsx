import React from 'react';

import classname from 'classnames/bind';
import scss from './Disp.module.scss';
const cx = classname.bind(scss);

const SaleList = () => {
  return <div className={cx('disp-outlet')}>SaleList</div>;
};

export default SaleList;
