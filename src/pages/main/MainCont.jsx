import classname from "classnames/bind";
import css from "./Main.module.scss";
const cx = classname.bind(css);

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Swiper 스타일 (필수)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCont = () => {
  return (
    <>
      <div className={cx("mn-cont")}>
        <div className={cx("mn-cont__title")}>
          <h2>메인 Swiper</h2>
        </div>
        <div className={cx("mn-cont__slide")}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation // 좌우버튼
            pagination={{ clickable: true }}
            //autoplay={{ delay: 3000 }}
            //onSlideChange={() => console.log("슬라이드 변경")}
            loop={true}
          >
            <SwiperSlide>
              <img src={"/images/temp/plnDtl_beauty_6.jpg"} alt="배너 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/images/temp/plnDtl_beauty_7.jpg"} alt="배너 2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainCont;
