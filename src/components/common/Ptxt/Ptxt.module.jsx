import { useRef } from 'react';
import { useInput } from '@/hooks/useInput';

import classname from 'classnames/bind';
import scss from './Ptxt.module.scss';
const cx = classname.bind(scss);

const Ptxt = ({ type, id, classNm, label, labelHidden, val, place, max, mode, del, size, dis }) => {
  const inpRef = useRef(null);
  const { value, onChange, clear, currentLength, isFull } = useInput(val || '', { max }, inpRef);

  return (
    <>
      <div className={cx('ptxt', size, classNm, { rd: isFull })}>
        {label && (
          <label htmlFor={id} className={labelHidden && cx({ ir: labelHidden })}>
            {label}
          </label>
        )}
        <input type={type} id={id} value={value} onChange={onChange} placeholder={place} inputMode={mode} spellCheck='false' disabled={dis} ref={inpRef} />

        {del && value.length > 0 && (
          <button className={cx('del')} onClick={clear} aria-label='텍스트삭제'>
            ✕
          </button>
        )}
      </div>
      {max && (
        <div className={cx('ptxt-cnt', classNm + '-cnt')}>
          <span style={{ color: isFull ? 'red' : '#999' }}>
            {currentLength} / {max}
          </span>
        </div>
      )}
    </>
  );
};

export default Ptxt;
