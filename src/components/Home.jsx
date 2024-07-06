import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import arr from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import Footer from "./pages/Footer";
import BannerBackground from "../assets/home-banner-background.png";
import pic1 from "../assets/pic1.jpg";
import '../Style.css';
import teasalad from '../assets/teasalad-removebg-preview.png';
import noodle from '../assets/noodle.png';
import { red } from "@mui/material/colors";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = (props, item, handleClick) => {
  const data = arr
  const [product, setProduct] = useState(null);
  const imageStyle = {
    filter: 'hue-rotate(180deg)' // Example: rotate hue by 180 degrees
  };
  return (
    <>
      <div className="home-banner-container min-h-screen flex ">
        <div className="home-bannerImage-container">
          <img className="tinted-blue" src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section p-10 md:p-20">

          <h1 className="primary-heading">
            Golden Land Recipes..
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit necessitatibus officia in incidunt, perferendis totam odio reiciendis harum quae cumque distinctio blanditiis praesentium ipsa. Labore sint voluptas suscipit obcaecati.</p>
          <div className="flex justify-center items-center">
            <button
              className='px-6 py-1 text-brightColor 
                    hover:bg-brightColor hover:text-white transition-all btn info rounded flex items-center'
              style={{ backgroundColor: "orange" }}
            >
              Get Started
              <ArrowForwardIcon className="ml-2" />
            </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={teasalad} alt="" />
        </div>
      </div>
      <div style={{ width: '100%', height: 500, position: 'relative' }}>
        <div
          style={{
            backgroundColor: '#fcb177',
            width: 500,
            height: 500, // Ensure height is same as width for a perfect circle
            borderRadius: '50%', // Use 50% for a perfect circle
            position: 'absolute',
            left: -350,
            top: '50%',
            transform: 'translateY(-50%)', // Center vertically
          }}
        ></div>
        <div style={{ position: 'relative', height: '100%' }}>
          <img
            src={noodle}
            alt="Promotion"
            className="rotated-image"
            style={{
              width: 350,
              height: 'auto',
              position: 'absolute',
              top: '50%',
              right: '55%',
              transform: 'translate(-50%, -50%)', // Center horizontally and vertically
            }}
          />


          <div style={{ width: 300, alignSelf: 'center' }}>
            <h1 className="primmary-heading text-center">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end md:space-x-2 space-x-1">
        <div className="w-full md:w-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
          <img className="product-image1  border-gray-300" src={pic1} alt="img" />
        </div>
        <div className="w-full md:w-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
          <img className="product-image1 border-gray-300" src={pic1} alt="img" />
        </div>
        <div className="w-full md:w-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
          <img className="product-image1  border-gray-300" src={pic1} alt="img" />
        </div>
      </div>

      <div className="image-row" style={{ padding: '10%' }}>
        <img className="round-image w-48 h-48" src={pic1} alt="" />
        <img className="round-image w-48 h-48" src={pic1} alt="" />
      </div>
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
        {
          data.Dessert.map((item, index) =>
            <SwiperSlide>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={120} sm={100} md={60} >
                    <img src={item.url} alt="" style={{ width: 300, height: 300 }} />
                  </Grid>
                </Grid>
              </Container>
            </SwiperSlide>
          )
        }
      </Swiper>
      <div>
      </div>
      <Footer />
    </>
  )
}
export default Home;