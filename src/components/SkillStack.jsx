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
                className="html"
                name="80%"
              />
              <App  
                className="css"
                name="80%"
              />
              <App  
                className="js"
                name="60%"
              />
              <App  
                className="react"
                name="50%"
              />
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide>
        <ul className="app--list--group stack--list--group">
          <li className="app--group">
            <App  
                className="figma"
                name="70%"
              />
              <App  
                className="ps"
                name="70%"
              />
              <App  
                className="ai"
                name="40%"
              />
              <App  
                className="github"
                name="50%"
              />
          </li>
        </ul>
      </SwiperSlide>
      
    </Swiper>
  );
}

export default StackApp;
