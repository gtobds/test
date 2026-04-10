import React from 'react';

import css from './Header.module.scss'
import logo_ak from '@/assets/images/common/logo_ak.svg'

const Header = ({name="삼성", sub="플라자"}) => {
  return (
    <>
      <div className={css.header} role="banner">
        <div className={css.head}>
          <h1 className={css.head_logo}>
            <a href="#" style={{width:'auto',height:'50px'}}>
              <img src={logo_ak} alt="AK PLAZA" />
            </a>
            <div>{name} {sub}</div>
          </h1>
          
        </div>
      </div>
    </>
  );
};

export default Header;
