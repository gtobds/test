import { useState } from 'react';

import classname from 'classnames/bind';
import scss from './Txta.module.scss';
const cx = classname.bind(scss);

const Txta = ({ classNm, name, id, place, max }) => {
  const [value, setValue] = useState('');

  const funcValue = (e) => {
    if (max && e.target.value.length > max) return;
    setValue(e.target.value);
  };
  const comma = (num) => {
    num = String(num);
    return num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <>
      <span className={cx('txta', classNm)}>
        <textarea value={value} onChange={funcValue} name={name} id={id} placeholder={place} rows='5' cols='1' spellCheck='false'></textarea>
        {max && (
          <label htmlFor={id} className={cx('txta-cnt')}>
            <em aria-label='현재글자수'>{comma(value.length)}</em>/<em aria-label='최대글자수'>{comma(max)}</em>
          </label>
        )}
      </span>
    </>
  );
};

export default Txta;
