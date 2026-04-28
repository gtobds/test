import { animate } from 'framer-motion';
import { useEffect, useState } from 'react';

import classname from 'classnames/bind';
import css from './Wing.module.scss';
const cx = classname.bind(css);

const Wing = () => {
  const [isTop, setIsTop] = useState(true);
  const [isBtm, setIsBtm] = useState(false);

  const htm = document.documentElement;

  const funcTop = () => {
    htm.classList.add('isScroll');
    animate(window.scrollY, 0, {
      duration: 0.5,
      onComplete: () => {
        htm.classList.remove('isScroll');
      },
    });
  };
  useEffect(() => {
    const fnScroll = () => {
      const foot = document.querySelector('#footer');
      const foot_pos = foot.getBoundingClientRect().top + window.pageYOffset - window.innerHeight;

      if (!htm.classList.contains('isLyr')) {
        if (window.scrollY < 20) {
          setIsTop(true);
        } else if (window.scrollY > foot_pos - 24) {
          setIsBtm(true);
        } else {
          setIsTop(false);
          setIsBtm(false);
        }
      }
    };
    window.addEventListener('scroll', fnScroll);
    return () => {
      window.removeEventListener('scroll', fnScroll);
    };
  }, []);

  return (
    <>
      <div className={cx('side-wing', { 'is-top': isTop }, { 'is-btm': isBtm })}>
        <div className={cx('side-wing-top')}>
          <a href='#' role='button' aria-label='맨위로 이동' onClick={funcTop}></a>
        </div>
      </div>
    </>
  );
};

export default Wing;
