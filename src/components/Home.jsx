import React from "react";
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
import SearchBox from "./pages/SearchBar";
import BannerBackground from "../assets/home-banner-background.png";
import pic1 from "../assets/pic1.jpg";


const Home = () => {

  const data = arr

  return (
    <>
    <div className="container min-h-screen">

    <div className="home-container">
       
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">

          <h1 className="primmary-heading">
            Your Favourite Food Deliveryed Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work,like peeding,
            chopping 
            & marinating, so you can cook a fresh food
          </p>
         
        </div>
        <div className="home-image-section">
            <img src={pic1} alt="" />  

        </div>
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
        <SearchBox/>
    </div>
            <Footer/>
            </>

  )
}
export default Home;