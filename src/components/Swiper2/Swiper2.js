import React from 'react';
import './Swiper2.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import photo1 from '../image/images.jfif';
import photo2 from '../image/images (2).jfif';
import photo3 from '../image/images (1).jfif';
import photo4 from '../image/download (1).jfif';
import photo5 from '../image/download (2).jfif';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);



const Swiper2 = () => {
  
    return (
      <div className="full-swiper-area">
        <div className="inner-full-swiper-area container">
          <h2>Top Rates Book</h2>
      <Swiper
      spaceBetween={2}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     


      <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
      ...
    </Swiper>
    </div>
    </div>
    );
};

export default Swiper2;