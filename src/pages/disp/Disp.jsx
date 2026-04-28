import React from 'react';
import { Outlet } from 'react-router';

import Header from '@/components/layout/Header/Header.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';

import Menu from '@/pages/disp/module/Menu.module.jsx';

const brd_name = 'AK';
const locate = 'DISP';

const Disp = () => {
  return (
    <>
      <div className='container'>
        <Header name={brd_name} ctg={locate} />
        <Menu />

        {/* 라우터로 받은 자식 컴포넌트  */}
        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default Disp;
