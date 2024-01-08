import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const MenuSlider = () => {
  return (
    <div className="our-menu-child1 hero-1 w-[60%] h-[50vh]  overflow-hidden rounded-xl ">
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      speed={300}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
      }}

      className="mySwiper ">
      <SwiperSlide>
        <div className="slide-1 h-full w-full flex justify-start items-center">

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-2 h-full w-full flex justify-start items-center">

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-3 h-full w-full flex justify-start items-center">

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-4 h-full w-full flex justify-start items-center">

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-5 h-full w-full flex justify-start items-center"></div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-6 h-full w-full flex justify-start items-center">

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-7 h-full w-full flex justify-start items-center">

        </div>

      </SwiperSlide>

    </Swiper>
  </div>
  )
}

export default MenuSlider
