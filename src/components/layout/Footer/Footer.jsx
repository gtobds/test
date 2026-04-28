import classname from 'classnames/bind';
import css from './Footer.module.scss';
const cx = classname.bind(css);

function Footer() {
  return (
    <>
      <div id='footer' className={cx('footer')}>
        푸터영역
      </div>
    </>
  );
}

export default Footer;
