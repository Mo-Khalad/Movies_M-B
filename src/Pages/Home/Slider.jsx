import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';
import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Mousewheel , Autoplay} from 'swiper/modules';

export const Slider = () => {
    return (
        <>
          <Swiper
            effect={'coverflow'}
            loop={'Infinite'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            speed={600}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination , Mousewheel , Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/abstract-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </>
      );
}
