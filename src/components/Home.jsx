import React, { useState, useEffect, useRef } from "react";
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
import '../Style.css';
import teasalad from '../assets/teasalad-removebg-preview.png';
import { red } from "@mui/material/colors";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutus from "../components/Aboutus";
import LearnMore from "../components/LearnMore";
import CustomerReview from "./pages/CustomerReview";
import axios from "axios";

const Home = (props, item, handleClick) => {
  const aboutRef = useRef(null);
  const [favorites, setFavorites] = useState([]);


  const handleGet = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const data = arr
  const imageStyle = {
    filter: 'hue-rotate(180deg)' // Example: rotate hue by 180 degrees
  };
  useEffect(() => {
    AOS.init({
      duration: 300, // Example duration for AOS animation
      easing: 'ease-in-out', // Example easing option for AOS animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:4000/favorites/allFavorite');
        setFavorites(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFavorites();
  }, []);


  return (
    <>
      <div className="home-banner-container min-h-screen flex ">
        <div className="home-bannerImage-container">
          <img
            className="tinted-blue"
            src={BannerBackground}
          />
        </div>
        <div className="home-text-section md:p-10">
          <h1 className="primary">
            Golden Land Receipes...
          </h1>
          <p data-aos="fade-up" className="primary-text">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Rem impedit necessitatibus officia in incidunt,
            perferendis totam odio reiciendis harum quae cumque distinctio blanditiis praesentium ipsa. Labore sint voluptas suscipit obcaecati.</p>
          <div className="secondary-button">
            <button onClick={handleGet}>
              Get Started
              <ArrowForwardIcon className="ml-3" />
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="home-image-section">
          <img
            src={teasalad}
            alt="biryani img"
            className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
            data-aos-once="true" />
        </div>
      </div>
      <Aboutus ref={aboutRef} />



      <CustomerReview/>
      {/* <Swiper effect={'coverflow'} grabCursor={true}
        centeredSlides={true} loop={true} slidesPerView={'auto'}
        coverflowEffect={{
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
                <Grid item>
                  <img src={item.url} alt="" style={{ width: 250, height: 250 }}
                  />
                </Grid>
              </Container>
            </SwiperSlide>
          )
        }
      </Swiper> */}
      <div>
      </div>
      <Footer />
    </>
  )
}
export default Home;