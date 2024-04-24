import React from 'react'
import swiper_img from '../../assets/img/basketball.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import './Feature.css'


const feature = () => {
  return (
    <section className="feature_section">
      <Container>
        <div className="title">
          <h1>App Feature <span>Screenshots</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad voluptatibus magni nihil deserunt animi cum saepe dolor illo velit cupiditate illo velit cupiditate.</p>
        </div>
        <div className='swiper_main_div'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              420: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_img_div">
                <img src={swiper_img} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default feature