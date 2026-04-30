import { useState } from 'react';

import classname from 'classnames/bind';
import scss from './Slt.module.scss';
const cx = classname.bind(scss);

const Slt = ({ id, sltData, label, classNm, size, place }) => {
  const [isVal, setIsVal] = useState('');
  return (
    <>
      <span className={cx('slt', size, classNm)}>
        <label htmlFor={id} className='ir'>
          {label}
        </label>
        <select id={id} value={isVal} onChange={(e) => setIsVal(e.target.value)}>
          {place && (
            <option value='' disabled hidden>
              {place}
            </option>
          )}
          {sltData.map((data) => (
            <option key={data.id} value={data.value}>
              {data.text}
            </option>
          ))}
        </select>
      </span>
    </>
  );
};

export default Slt;
