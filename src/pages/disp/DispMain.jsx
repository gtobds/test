import React from 'react';

import classname from 'classnames/bind';
import scss from './Disp.module.scss';
const cx = classname.bind(scss);

const DispMain = () => {
  return <div className={cx('disp-outlet')}>DispMain</div>;
};

export default DispMain;
