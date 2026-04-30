import { animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { usePosStore } from '@/stores/usePosStore';

import classname from 'classnames/bind';
import scss from './Wing.module.scss';
const cx = classname.bind(scss);

const Wing = () => {
  const [isTop, setIsTop] = useState(true);
  const [isBtm, setIsBtm] = useState(false);

  const htm = document.documentElement;
  const wingRef = useRef(null);

  const funcTop = () => {
    htm.classList.add('isScroll');
    animate(window.scrollY, 0, {
      duration: 0.5,
      onComplete: () => {
        htm.classList.remove('isScroll');
      },
    });
  };

  const getFootTop = usePosStore((state) => state.footTop);
  const getFootHeight = usePosStore((state) => state.footHeight);

  const btmStyle = isBtm
    ? {
        position: 'absolute',
        bottom: getFootHeight + parseInt(wingRef.current.style.bottom) + 'px',
      }
    : {
        position: 'fixed',
        bottom: '24px',
      };

  useEffect(() => {
    const fnScroll = () => {
      if (!htm.classList.contains('isLyr') && getFootTop > window.innerHeight) {
        if (window.scrollY < 20) {
          setIsTop(true);
        } else if (window.scrollY > getFootTop - window.innerHeight) {
          setIsBtm(true);
        } else {
          setIsTop(false);
          setIsBtm(false);
        }
      }
    };

    //window.addEventListener('load', fnScroll);
    window.addEventListener('scroll', fnScroll);
    window.addEventListener('resize', fnScroll);
    return () => {
      //window.removeEventListener('load', fnScroll);
      window.removeEventListener('scroll', fnScroll);
      window.removeEventListener('resize', fnScroll);
    };
  }, [getFootTop, getFootHeight]);

  return (
    <>
      <div ref={wingRef} className={cx('side-wing', { 'is-top': isTop }, { 'is-btm': isBtm })} style={btmStyle}>
        <div className={cx('side-wing-top')}>
          <a href='#' role='button' aria-label='맨위로 이동' onClick={funcTop}></a>
        </div>
      </div>
    </>
  );
};

export default Wing;
