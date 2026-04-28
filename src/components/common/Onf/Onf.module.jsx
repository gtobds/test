import { useState, useId } from 'react';

import classname from 'classnames/bind';
import css from './Onf.module.scss';
const cx = classname.bind(css);

const Onf = ({ classNm, label, disabled }) => {
  const [isOn, setIsOn] = useState(false);
  const idu = useId();

  return (
    <div className={cx('onf')}>
      <button type='button' className={cx('btOnf', { on: isOn }, classNm)} id={'onf' + idu} aria-label={isOn ? '활성' : '비활성'} onClick={() => setIsOn(!isOn)} disabled={disabled}></button>
      <label htmlFor={'onf' + idu}>{label}</label>
    </div>
  );
};

export default Onf;
