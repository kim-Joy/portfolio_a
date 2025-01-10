import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 

import App from 'components/App';

import 'swiper/css';
import 'swiper/css/pagination';



function StackApp(prop) {
  return (
    <Swiper
      //slidesPerView={prop.preview} 
      //spaceBetween={prop.beteen} 
      autoHeight={false}
      direction="vertical"
      modules={[Pagination]}
      pagination={{ clickable: true }}
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
                name="독서"
              />
              <App  
                className="blog"
                name="잠자기"
              />
              <App  
                className="blog"
                name="잠자기"
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
                className="SNS"
                name="도파민"
              />
              <App  
                className="blog"
                name="잠자기"
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
