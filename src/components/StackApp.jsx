import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // Swiper 11에서는 이렇게 가져옵니다.
import 'swiper/css';
import 'swiper/css/pagination';

function StackApp() {
  return (
    <Swiper
      direction="vertical"
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      className="stack--list--swiper"
      style={{ height: '180px' }}
    >
      <SwiperSlide>
        <ul className="skill--list-group">
          <li>
            <i className="skill__icon skill__html"></i>
            <span className="skill__name">HTML</span>
          </li>
          <li>
            <i className="skill__icon skill__html"></i>
            <span className="skill__name">CSS3</span>
          </li>
          <li>
            <i className="skill__icon skill__html"></i>
            <span className="skill__name">JavaScript</span>
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide>
        <ul className="skill--list-group">
          <li className="skill__icon skill__html">
            <span className="skill__name">HTML</span>
          </li>
        </ul>
      </SwiperSlide>
    </Swiper>
  );
}

export default StackApp;
