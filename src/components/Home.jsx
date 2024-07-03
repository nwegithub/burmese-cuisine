import React from "react";
import Button from "../layouts/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import homeBg from "../assets/homeBg.jpg"
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import arr from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import Footer from "./pages/Footer";
import SearchBox from "./pages/SearchBar";


const Home = () => {

  const data = arr

  return (
    <>
    <div className="container min-h-screen">
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