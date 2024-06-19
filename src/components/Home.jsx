import React from "react";
import Button from "../layouts/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-row justify-between items-center 
        lg:px-32 px-5 bg-[url('https://i.pinimg.com/originals/47/15/6d/47156d8aa470b276c3ee0e4ebf08ff03.jpg')] 
        bg-cover bg-no-repeat">
        <div className="w-full lg:w-2/3 space-y-5">
          <h1 className="text-backgroundColor font-semibold text-5xl">Stunning Food & Receipes</h1>
          <p className="text-backgroundColor">
          </p>
          {/* <div className="lg:pl-44">
                    <Button title="Order Now" />
                </div> */}
        </div>
      </div>
      <div className='container'>
        <h1 className='heading'>Flower</h1>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={'auto'} coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,

        }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        >
          <SwiperSlide>
            <img src="https://www.luckytreasuretravels.com/media/img/vt/e775afebea718e4f74cc40ce2b271bed08e7001.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://static.wixstatic.com/media/574c0d_67a97ef27708476b89d113e544a1a96a~mv2.jpg/v1/fill/w_1000,h_666,al_c,q_90,usm_0.66_1.00_0.01/574c0d_67a97ef27708476b89d113e544a1a96a~mv2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.luckytreasuretravels.com/media/img/vt/e775afebea718e4f74cc40ce2b271bed08e7001.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.luckytreasuretravels.com/media/img/vt/e775afebea718e4f74cc40ce2b271bed08e7001.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.luckytreasuretravels.com/media/img/vt/e775afebea718e4f74cc40ce2b271bed08e7001.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.luckytreasuretravels.com/media/img/vt/e775afebea718e4f74cc40ce2b271bed08e7001.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.luckytreasuretravels.com/media/img/vt/e775afebea718e4f74cc40ce2b271bed08e7001.jpg" alt="" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}
export default Home;