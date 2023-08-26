import React from 'react'
import './Partners.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Navigation, Pagination } from 'swiper/modules';

function Partners() {
  return (
    <section className='partners'>
        <div className="container">
            <h2>ПАРТНЕРЫ</h2>
            <div className="partners__list">
            <Swiper
                slidesPerView={3}
                grid={{
                rows: 2
                ,
                }}
                navigation={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Grid, Pagination,Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Partners