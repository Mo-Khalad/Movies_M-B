import React from "react";
import { slideImageData } from '@/Logic/dataLocalStatic'
import { Swiper , SwiperSlide } from "@/Shared/Libs";
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import './styles.css';
import "./styles.css";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

export const Slider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={"Infinite"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={600}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        { slideImageData.map(({ URL, TEXT, TIME, DAY }) => {
          return (
            <SwiperSlide className={`${URL} bg-cover shadow-main-shadow`}>
              <div className="flex items-end h-full relative">
                <div className="w-full h-16 p-3 flex flex-wrap items-center justify-between">
                  <h3 className="text-lg md:text-2xl md:mb-3 md:mt-2 text-main-color">{TEXT}</h3>
                  <div className="md:w-56 flex">
                    <p className="mb-1 text-xs md:text-sm me-6 opacity-100">{TIME} </p>
                    <span className="mb-1 text-xs md:text-sm">{DAY}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 z-[-1] bg-black opacity-60"/>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
