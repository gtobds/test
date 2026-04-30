import { useId, useState } from 'react';

import classname from 'classnames/bind';
import scss from './Chk.module.scss';
const cx = classname.bind(scss);

const Chk = ({ label, classNm, size, checked = false, disabled }) => {
  const idu = useId();
  const [isCheck, setIsCheck] = useState(checked);
  return (
    <>
      <span className={cx('chk', size, classNm)}>
        <input type='checkbox' id={'chk' + idu} defaultChecked={isCheck} disabled={disabled} onChange={() => setIsCheck(!isCheck)} />
        <label htmlFor={'chk' + idu}>{label}</label>
      </span>
    </>
  );
};

export default Chk;
