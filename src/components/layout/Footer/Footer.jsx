import { useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { usePosStore } from '@/stores/usePosStore';

import classname from 'classnames/bind';
import scss from './Footer.module.scss';
const cx = classname.bind(scss);

function Footer() {
  const locate = useLocation(); // 경로 변경 감지
  const footRef = useRef(null);
  const setFootTop = usePosStore((state) => state.setFootTop);
  const setFootHeight = usePosStore((state) => state.setFootHeight);

  const fncFooter = useCallback(() => {
    if (footRef.current) {
      const $foot = footRef.current;
      setFootHeight($foot.offsetHeight);
      setFootTop($foot.getBoundingClientRect().top + window.pageYOffset);
    }
  }, [setFootTop, setFootHeight]);

  fncFooter();

  useEffect(() => {
    //if (!footRef.current) return;
    requestAnimationFrame(fncFooter); // 리액트 렌더링 루프 밖에서 상태 업데이트

    const observer = new ResizeObserver(() => {
      fncFooter();
    });
    observer.observe(document.body);

    const timer = setTimeout(() => {
      fncFooter();
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [fncFooter, locate.pathname]);

  return (
    <>
      <div ref={footRef} className={cx('footer')}>
        푸터영역
      </div>
    </>
  );
}

export default Footer;
