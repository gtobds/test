import { useState, useEffect } from 'react';
import axios from 'axios';
import GdsList from '@/components/product/GdsList/GdsList.module';

import classname from 'classnames/bind';
import scss from './Disp.module.scss';
const cx = classname.bind(scss);

const SaleList = () => {
  const [gds, setGds] = useState([]);
  useEffect(() => {
    axios
      .get(new URL('/data/goodsData.json', import.meta.url).href)
      .then((response) => {
        setGds(response.data.goodsData);
      })
      .catch((error) => {
        console.error('파일을 불러오는데 실패했습니다:', error);
      });
  }, []);

  return (
    <>
      <div className={cx('disp-outlet')}>SaleList</div>
      <div className={cx('gds-test')}>
        <GdsList data={gds} />
      </div>
    </>
  );
};

export default SaleList;
