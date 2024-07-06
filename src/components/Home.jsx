import React,{useState,useEffect} from "react";
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
import promoImage from "../assets/article.png"


const Home = () => {

  const data = arr

  const [product, setProduct] = useState(null);


  useEffect(() => {

    fetch('http://localhost:4000/products/allProduct') 
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        })
        .catch(error => {
            console.error('There was an error fetching the product data!', error);
        });
}, []);

if (!product) {
    return <div>Loading...</div>;
}

console.log("p",product)

  const imageStyle = {
    filter: 'hue-rotate(180deg)' // Example: rotate hue by 180 degrees
  };
  return (
    <>
       
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  className="tinted-blue" src={BannerBackground} alt="" />
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
      <div style={{ width: '100%', height: 400, position: 'relative' }}>
  <div
    style={{
      backgroundColor: 'pink',
      width: 450, // Set width and height to the same value
      height: 450,
      borderRadius: '50%', // Use 50% for a perfect circle
      position: 'absolute',
      left: -300,
    }}
  >

  </div>
  <div style={{
    
paddingTop:100
    }}>
                    <img src={promoImage} alt="Promotion" className="rotated-image" style={{width:200,height:200}} />
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
        <div>
        </div>
<Footer/>
    </>
  )
}
export default Home;