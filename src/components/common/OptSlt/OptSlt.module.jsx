import { useState, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import classname from 'classnames/bind';
import scss from './OptSlt.module.scss';
const cx = classname.bind(scss);

const OptSlt = ({ id, options, classNm, select = 0, lyrSpeed = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(select);
  const idu = useId();

  const sltRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // 바깥 클릭시 커스텀훅 호출 - ref객체, 실행할 함수
  useOutsideClick(sltRef, () => setIsOpen(false));

  const handleSelect = (idx, e) => {
    e.preventDefault();
    if (options[idx].isOutOfStock) return; // 품절 시 클릭 방지
    setSelectedIdx(idx);
    setIsOpen(false);
  };

  return (
    <>
      <div className={cx('btn_opt_slt', classNm)} role='combobox' aria-expanded={isOpen} ref={sltRef}>
        <div className={cx('bt')}>
          <button type='button' aria-controls={id} aria-pressed={isOpen} onClick={toggleDropdown}>
            <span>{options[selectedIdx].label}</span>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={cx('lyr')}
              id={id}
              role='listbox'
              initial={{ height: 0, display: 'block' }}
              animate={{ height: 'auto' }}
              exit={{ height: 0, display: 'none' }}
              transition={{ duration: lyrSpeed, ease: 'easeInOut' }}>
              <div className={cx('lyr-scr')} tabIndex='0'>
                <ul>
                  {options.map((opt, idx) => (
                    <li key={idu + idx}>
                      <a href='#' role='option' aria-selected={selectedIdx === idx} className={cx({ out: opt.isOutOfStock })} onClick={(e) => handleSelect(idx, e)}>
                        <span className={cx('unit')}>
                          <span className={cx('unit-tx')}>
                            {opt.label}
                            {opt.isOutOfStock && '(품절)'}
                          </span>
                          {opt.subText && <span className={cx('unit-sb')}>{opt.subText}</span>}
                        </span>
                      </a>

                      {/* 품절 시 재입고 알림 버튼 */}
                      {opt.isOutOfStock && (
                        <span className={cx('side')}>
                          <button type='button' className={cx('restock')} onClick={() => alert('재입고 알림 신청')}>
                            재입고알림
                          </button>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OptSlt;
