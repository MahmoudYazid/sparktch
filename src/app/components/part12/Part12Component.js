"use client";
import Part12Cards from "./Part12Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper/modules";   // <--- add this

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Part12Component = () => {
    return (
<div className="w-full h-auto md:flex md:flex-row grid grid-col-1 item-center justify-center text-center flex-wrap bg-white">
 <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[20rem] h-[40rem]"
      >
        <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
</div>

    )
};

export default Part12Component;