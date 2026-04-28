import React, { useState, useRef } from 'react';
//import { useLayer } from '@/contexts/layerContext';
import { useLayerStore } from '@/stores/useLayerStore';
import { useScrollTop } from '@/hooks/useScrollTop.jsx';

import classname from 'classnames/bind';
import css from './Header.module.scss';
const cx = classname.bind(css);

import Gnb from '@/components/layout/Header/Gnb.module.jsx';
import Btn from '@/components/common/Btn/Btn.module.jsx';

import LayerGds_1 from '@/pages/common/layers/LayerGds_1.jsx';

let isLog = true;

const Header = ({ name = '삼성', sub = '플라자', ctg }) => {
  //const cartRef = useRef(null); // 클래스 셀렉터 대신 ref 사용

  const isScrollTop = useScrollTop(82);

  const [isCart, setCart] = useState(false);
  const fnAddCart = (nm) => {
    //ref객체 선택시 반드시 current로
    /*
    if (cartRef.current.classList.contains("active")) {
      alert(nm + " 상품을 장바구니에서 삭제하였습니다.");
      cartRef.current.classList.remove("active");
    } else {
      alert(nm + " 상품이 장바구니에 담겼습니다.");
      cartRef.current.classList.add("active");
    }
    */
    setCart(!isCart);
    if (!isCart) {
      console.log(nm + ' 상품을 장바구니에서 삭제하였습니다.');
    } else {
      console.log(nm + ' 상품이 장바구니에 담겼습니다.');
    }
  };

  //layerContext 사용
  //const { openLayer } = useLayer();
  const openLayer = useLayerStore((state) => state.openLayer);

  return (
    <>
      <div className={cx('header', { 'hd-compact': isScrollTop })} role='banner'>
        <div className={cx('head')}>
          <h1 className={cx('head-logo')}>
            <a href='#' style={{ width: 'auto', height: '50px' }}>
              <img src={new URL('@/assets/images/common/logo_ak.svg', import.meta.url).href} alt={name + ' ' + sub} />
              <span className={cx('head-logo__sub')}>{ctg}</span>
            </a>

            <div className='btn-set'>
              {isLog ? (
                <>
                  {/* 매개변수 있음 */}
                  <Btn text='장바구니' cart={isCart} onClick={() => fnAddCart('키보드')} />
                  {/* 매개변수 없음 */}
                  <Btn size='sd' text='결제하기' press={true} />
                  <Btn type='ln' text='버튼33' press={true} />
                  <Btn type='ln' add='wish' text='addClass / 레이어열기' onClick={() => openLayer(<LayerGds_1 title='헤더에서 열린 레이어' />)} />
                </>
              ) : (
                <Btn add='in' text='조건부클래스' />
              )}
              {/* 삼항연산자대신 단순표현 */}
              {isLog && <Btn add='in' text='조건부클래스22' />}
            </div>
          </h1>
        </div>
        <Gnb />
      </div>
    </>
  );
};

export default Header;
