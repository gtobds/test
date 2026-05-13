import classname from 'classnames/bind';
import scss from './GdsPrice.module.scss';
const cx = classname.bind(scss);

const GdsPrice = ({ classNm, rm, prc = 0, ori }) => {
  const comma = (num) => {
    num = String(num);
    return num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <>
      <div className={cx('gdsPrice', classNm)}>
        {rm && (
          <span className={cx('gdsPrice-rm', 'sp-tx')}>
            <em className='ir'>할인</em>
            <b>{rm}</b>%
          </span>
        )}
        <span className={cx('gdsPrice-prc')}>
          <em className='ir'>판매가</em>
          <b>{comma(prc)}</b>
          <em>원</em>
        </span>
        {ori && (
          <span className={cx('gdsPrice-ori')}>
            <em className='ir'>정상가</em>
            <b>{comma(ori)}</b>
          </span>
        )}
      </div>
    </>
  );
};

export default GdsPrice;
