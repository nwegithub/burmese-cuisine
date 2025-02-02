import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import arr from "../../recipie.json"
import Footer from "./pages/Footer";
import BannerBackground from "../assets/home-banner-background.png";
import '../Style.css';
import teasalad from '../assets/teasalad-removebg-preview.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from "aos";
import "aos/dist/aos.css";
import '../Footer.css';
import Aboutus from "../components/Aboutus";
// import LearnMore from "../components/LearnMore";
import CustomerReview from "./pages/CustomerReview";
import axios from "axios";
import { useAuth } from '../Auth/AuthContext';
import { Button } from '@mui/material';
import HomeArticle from "./pages/HomeArticle";
import LearnMore from "../components/LearnMore";
import EthnicalFavorite from "./EthnicalFavorite";
import rice from "../assets/Thingyan htamin rice.jpg";


const Home = (props, item, handleClick) => {
  const aboutRef = useRef(null);
  const bannerRef = useRef(null);
  const [favorites, setFavorites] = useState([]);
  const { isMya, setIsMya } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const handleGet = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const data = arr
  const imageStyle = {
    filter: 'hue-rotate(180deg)' // Example: rotate hue by 180 degrees
  };
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false, // Animation happens every time you scroll
      anchorPlacement: 'top-bottom',
      offset: 100, // Trigger animations when elements are 100px away from viewport
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
      <div  
      ref={bannerRef}className="home-banner-container" style={{ minHeight: '80vh', overflowX: 'hidden' }}>
        <div className="home-bannerImage-container">
          <img
            className="tinted-color"
            src={BannerBackground}
            alt="Banner Background"
          />
        </div>
        <div className="home-text-section md:p-15 text-justify">
          <h1 className="primary title1" style={{paddingRight:isMya? 10: 0}} >
            {isMya ? "Myanmar Cuisine မှကြိုဆိုပါတယ်" : "Welcome to Myanmar Cuisine"}
          </h1>
          <p data-aos="fade-up" style={{ fontSize: '1.8rem', marginTop: '24px', lineHeight: '2.5rem',textAlign:'justify'}} className="body1 mx-auto text-justify">
            {isMya ? "ကျွန်မတို့၏ဝက်ဘ်ဆိုဒ်သည်လူကြီးမင်း၏အရသာခံနိုင်စွမ်းများကိုကျေနပ်စေရန်ချက်ပြုတ်နည်း ပညာပေးခြင်းဖြင့် စိတ်ကျေနပ်မှုရရှိစေရန်ရည်ရွယ်ထားပါသည်။ရိုးရာအစားအစာများမှတဆင့်ဆန်းသစ်သောဖန်တီးမှုများအထိ၊ကျွမ်းကျင်သူများနှင့် အစားအသောက်ဝါသနာရှင်များကစုစည်းထားသော ချက်ပြုတ်နည်းအများအပြားကို စူးစမ်းလေ့လာနိုင်ပါသည်။" : "Discover the ultimate destination for all things culinary. Whether you're a seasoned chef or a home cook, our website is designed to inspire, educate, and satisfy your taste buds. Explore a vast collection of recipes, from classic favorites to innovative creations, curated by experts and food enthusiasts alike."}
          </p>
          <div className="secondary-button" style={{marginTop:20}}>
            <button onClick={handleGet}>
              {isMya ? "စတင်ရန်" : " Get Started"}
              <ArrowForwardIcon className="ml-6" />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="home-image-section"
        >
          <img
            src={teasalad}
            alt="biryani img"
            className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin rounded-full"
            data-aos-once="true"
          />
        </div>
      </div>
      <Aboutus ref={aboutRef} />
      {/* <HomeArticle /> */}
      <LearnMore />
      <CustomerReview />
      <EthnicalFavorite/>
      <div>
      </div>
      <Footer />
    </>
  )
}
export default Home;