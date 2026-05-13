import { Link } from 'react-router';
import BtWish from '@/components/common/BtWish/BtWish.module';

import classname from 'classnames/bind';
import scss from './GdsImg.module.scss';
const cx = classname.bind(scss);

const GdsImg = ({ classNm, link = '#', src = '/images/temp/no_img_vec.svg', sub, alt = '이미지', wish = false }) => {
  return (
    <>
      <div className={cx('gdImg', classNm)}>
        <Link to={link}>
          <span className={cx('img')}>
            <img src={src} alt={alt} />
            {sub && <img className={cx('sub-trans')} src={sub} alt={alt} />}
          </span>
        </Link>
        <BtWish on={wish} />
      </div>
    </>
  );
};

export default GdsImg;
