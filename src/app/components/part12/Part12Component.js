"use client";
import Part12Cards from "./Part12Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper/modules";   // <--- add this

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Part12Component = () => {
    return (
<div className="w-full h-[45rem] md:flex md:flex-row grid grid-col-1 item-center justify-center text-center flex-wrap bg-white">
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
        className="mySwiper w-[20rem] h-auto m-2"
      >
        <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
       <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
         <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
         <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
         <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
         <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
         <SwiperSlide className=" flex items-center justify-center bg-green-200 w-[10rem] h-[30rem] ">
          <Part12Cards image="https://swiperjs.com/demos/images/nature-1.jpg" title="Nature 1" />
        </SwiperSlide>
      </Swiper>

    </>
  
</div>

    )
};

export default Part12Component;