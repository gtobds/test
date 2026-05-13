import { Link } from 'react-router';

import GdsImg from '@/components/product/GdsImg/GdsImg.module';
import GdsTitle from '@/components/product/GdsTitle/GdsTitle.module';
import GdsPrice from '@/components/product/GdsPrice/GdsPrice.module';
import GdsTag from '@/components/product/GdsTag/GdsTag.module';
import GdsEtc from '@/components/product/GdsEtc/GdsEtc.module';

import classname from 'classnames/bind';
import scss from './GdsList.module.scss';
const cx = classname.bind(scss);

const GdsList = ({ data, num, size }) => {
  return (
    <>
      {data.length > 0 && (
        <div className={cx('gdsList', num, size)}>
          <ul className={cx('gdsList-wrap')}>
            {data.map((gd) => (
              <li key={gd.id}>
                <GdsImg link={gd.link} src={gd.src} sub={gd.sub} alt={gd.title} wish={gd.wish} />
                <div className={cx('gdInfo')}>
                  <Link to={gd.link}>
                    <GdsTitle brd={gd.brd} sales={gd.sales} title={gd.title} />
                    <GdsPrice rm={gd.rm} prc={gd.prc} ori={gd.ori} />
                    {gd.tag && <GdsTag lst={gd.tag} />}
                    {(gd.star || gd.review) && <GdsEtc st={gd.star} rv={gd.review} />}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GdsList;
