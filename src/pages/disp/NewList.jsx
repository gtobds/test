//import { useLayoutEffect, useRef, useState } from 'react';
import { useScrollAnchor } from '@/hooks/useScrollAnchor';
//import { useScrollTop } from '@/hooks/useScrollTop';
import classname from 'classnames/bind';
import scss from './NewList.module.scss';
const cx = classname.bind(scss);

const ContInfo_0 = () => {
  return (
    <>
      <div>상품정보 contents</div>
    </>
  );
};
const ContReview_0 = () => {
  return (
    <>
      <div>구매후기 contents</div>
    </>
  );
};

const tabs = [
  { id: 'info', title: '상품정보', content: <ContInfo_0 /> },
  { id: 'review', title: '구매후기', content: <ContReview_0 /> },
  { id: 'guide', title: '배송안내', content: '' },
  { id: 'notice', title: '공지사항', content: '' },
];

const NewList = () => {
  const { setAncRef, scrollToAnc, activeId } = useScrollAnchor(116);

  return (
    <>
      <div className={cx('disp-outlet')}>NewList</div>
      <div className={cx('ank-wrap')}>
        <div className={cx('ank-tab')}>
          <div className={cx('ank-tab_bx')}>
            <ul>
              {tabs.map((tb) => (
                <li key={tb.id}>
                  <button type='button' role='option' aria-selected={activeId === tb.id ? 'true' : 'false'} onClick={() => scrollToAnc(tb.id)}>
                    {tb.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cx('ank-cont')}>
          {tabs.map((tb) => (
            <div className={cx('ank-cont_bx')} key={tb.id} ref={setAncRef(tb.id)}>
              <h3 className={cx('title')}>{tb.title}</h3>
              <div className={cx('cont')}>{tb.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewList;
