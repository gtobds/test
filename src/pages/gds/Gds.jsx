import React from 'react';

import Header from '@/components/layout/Header/Header.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';
import Wing from '@/components/common/Wing/Wing.module';
import GdsCont from '@/pages/gds/GdsCont.jsx';

const brd_name = 'AK';
const locate = 'GDS';

const Gds = () => {
  return (
    <>
      <div className='container'>
        <Header name={brd_name} ctg={locate} />
        <GdsCont />
        <Footer />
        <Wing />
      </div>
    </>
  );
};

export default Gds;
