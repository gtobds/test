import { useId, useState, useRef } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick.jsx';

import classname from 'classnames/bind';
import scss from './Tip.module.scss';
const cx = classname.bind(scss);

const Tip = ({ classNm, title, children }) => {
  const btRef = useRef(null);
  const lyrRef = useRef(null);
  const uid = useId();
  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick([btRef, lyrRef], () => setIsOpen(false));

  return (
    <>
      <div className={cx('tip-bx', classNm)}>
        <button type='button' className={cx('tip-bt', { on: isOpen })} aria-describedby={'tip' + uid} aria-label='툴팁 열기' onClick={() => setIsOpen(!isOpen)} ref={btRef}></button>
        {isOpen && (
          <div className={cx('tip-lyr')} id={'tip' + uid} role='tooltip' ref={lyrRef}>
            {title && <div className={cx('tip-lyr__tit')}>{title}</div>}
            <div className={cx('tip-lyr__cont')}>{children}</div>
            <button type='button' className={cx('tip-cls')} aria-label='툴팁 닫기' onClick={() => setIsOpen(false)}>
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Tip;
