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


const Home = () => {

  const data = arr

  return (
    <div>
      <div
        className="min-h-screen flex flex-row justify-between 
        lg:px-32 px-5 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full lg:w-2/3 space-y-5 textPosition">
          <h1 className="text-backgroundColor font-semibold text-5xl slidein mt-12">Stunning Food & Recipes</h1>
          <h2 className="text-backgroundColor font-semibold text-2xl slideout mt-12">Fresh & Fabulous Recipes for Food Lovers</h2>
          <p className="text-backgroundColor slideTop">"Delicious Recipes for Every Occasion"</p>
        </div>



        <div>
          <div className="flex flex-row " style={{ marginTop: 80 }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVW9jhOkMYZJbibfxQEfPg6ZDKKY7pGzkQg&s"
              alt="A visually appealing image that complements your content"
              className="w-full h-auto rounded shadow-md slidein"
              style={{ width: 200, height: 110, borderRadius: 30, marginTop: 60 }}
            />
            <img
              src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1620075704/Myanmar-Traditional-Dishes-To-Try-Mohinga/Myanmar-Traditional-Dishes-To-Try-Mohinga-1120x732.jpg"
              alt="A visually appealing image that complements your content"
              className="w-full h-auto rounded shadow-md slideout"
              style={{ width: 180, height: 150, borderTopLeftRadius: 30, borderBottomRightRadius: 30, marginLeft: 20 }}
            />

          </div>
          <div className="flex flex-row " >

            <img
              src="https://www.gomyanmartours.com/wp-content/uploads/2014/11/Shan-%E2%80%98tofu%E2%80%99-noodles-delicious-Myanmar-traditional-food.jpg"
              alt="A visually appealing image that complements your content"
              className="w-full h-auto rounded shadow-md slideTop"
              style={{ width: 80, height: 180, marginTop: 25, borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}
            />
            <img
              src="https://www.luckytreasuretravels.com/media/cache/a0/86/a086328fa9a43bf5467dfa51a6662024.jpg"
              alt="A visually appealing image that complements your content"
              className="w-full h-auto rounded shadow-md slideout"
              style={{ width: 250, height: 150, borderRadius: 20, marginLeft: 20, marginTop: 20 }}
            />


          </div>
        </div>
      </div>

      <div className='container' style={{ backgroundColor: "#f5f5fa" }}>
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
                      <img src={item.url} alt="" />

                    </Grid>

                  </Grid>
                </Container>          </SwiperSlide>
            )
          }


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