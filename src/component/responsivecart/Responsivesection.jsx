import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import Responsivecart from './Responsivecart';

export default function Responsivesection({ item, title }) {

  return (
    <>

      <div className='font-bold my-4 ml-4  text-2xl'>{title}</div>

      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper "
        breakpoints={{
            412: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
             768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },

            800:{
              slidesPerView: 4,
              spaceBetween: 35,
            },

            1024:{
              slidesPerView: 5,
              spaceBetween: 35,
            },

            1280:{
              slidesPerView: 6,
              spaceBetween: 40,
            }

          }}
      >
        {
          item?.map((data, index) => {
            return (
              <SwiperSlide >
                <Responsivecart key={index} img={data.img} title={data.title} price={data.price} gram={data.gram} />
              </SwiperSlide>
            )
          })
        }

      </Swiper >
    </>
  );
}
