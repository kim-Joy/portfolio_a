import React from 'react';
import App from 'components/App';

function Swiper(prop){

  return(
    <div className="swiper">
      스와이프 영역
      <App  
        className={prop.swiper_item_class}
        name={prop.swiper_item_name}
      />
    </div>
  );
}

export default Swiper;