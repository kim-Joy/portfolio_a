import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 

import App from 'components/App';

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
      className="stack--slider--wrapper"
    >
      <SwiperSlide>
        <ul className="app--list--group stack--list--group">
          <li className="app--group">
            <App  
                className="yogo"
                name="요가"
              />
              <App  
                className="tennis"
                name="테니스"
              />
              <App  
                className="mountain"
                name="등산"
              />
              <App  
                className="trip"
                name="독서서"
              />
              <App  
                className="knitting"
                name="뜨개질"
              />
              <App  
                className="diary"
                name="다꾸"
              />
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide>
        <ul className="app--list--group stack--list--group">
          <li className="app--group">
            <App  
                className="blog"
                name="블로그"
              />
              <App  
                className="blog"
                name="잠자기"
              />
          </li>
        </ul>
      </SwiperSlide>
      
    </Swiper>
  );
}

export default StackApp;
