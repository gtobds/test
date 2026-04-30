import React from 'react';

import Header from '@/components/layout/Header/Header.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';
import Wing from '@/components/common/Wing/Wing.module';
import MainCont from '@/pages/main/MainCont.jsx';

const brd_name = 'AK';
const locate = 'MAIN';

const Main = () => {
  return (
    <>
      <div className='container'>
        <Header name={brd_name} ctg={locate} />
        <MainCont />
        <Footer />
        <Wing />
      </div>
    </>
  );
};

export default Main;
