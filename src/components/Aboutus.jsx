import React, { useRef } from "react";
import AboutBackground from '../assets/aboutBackground.png';
import motehinkar from '../assets/AboutBackgroud.png'
import noodle from '../assets/noodle.png';
import '../Style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LearnMore from "../components/LearnMore";
import { useAuth } from '../Auth/AuthContext';
import HomeArticle from "./pages/HomeArticle";


const Aboutus = React.forwardRef((props, ref) => {
    const learnRef = useRef(null);
    const { isMya, setIsMya } = useAuth();
    const handleLearnMore = () => {
        learnRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div ref={ref}>
            <div className="about-section-container" style={{ minHeight: '50vh' }}>
                <div className="about-background-image-container flex justify-center items-center">
                    <img src={AboutBackground} alt="" className="max-w-xs h-200px tinted-color" />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="about-section-image-container">
                    <img
                        src={motehinkar}
                        alt="biryani img"
                        className="w-[1000px] sm:w-[1000px] sm:scale-125 mx-auto spin"
                        data-aos-once="true"
                    />

                </div>
                <div
                    data-aos="fade-up"
                    className="about-section-text-container p-8 md:p-8">
                    <h1 className="primary title1 text-center">
                        {isMya ? " ယဉ်ကျေးမှုများမျှဝေခြင်း" : "Foods for sharing cultures"}
                    </h1>
                    <p style={{ fontSize: '1.8rem', marginTop: '24px', lineHeight: '2.5rem',textAlign:'justify' }} className="body1 mx-auto text-justify">
                        {isMya
                            ? "အစားအစာသည် စားရေးသောက်ရေးသာမကဘဲလူများစုပေါင်း၍ ယဉ်ကျေးမှုများမျှဝေရန်နှင့် ထာဝရအမှတ်တရများဖန်တီးရန် နည်းလမ်းတစ်ခုဖြစ်သည်ဟု ကျွန်ုမတို့ယုံကြည်ပါသည်။လူကြီးမင်းသည်စားဖိုမှူးသို့မဟုတ် အိမ်ရှင်မဖြစ်နေပါစေ လူကြီးမင်း၏အချက်အပြုတ်နဲ့ပတ်သက်တဲ့စွန့်စားခန်းများကို ကူညီပံ့ပိုးရန်ကျွန်မတို့ဤနေရာတွင်ရှိနေပါသည်။"
                            : "At [Myanmar Cuisine], our mission is simple: to inspire, educate, and satisfy your culinary curiosities. We believe that food is not just sustenance but a means to bring people together, share cultures, and create lasting memories. Whether you're a seasoned chef or a home cook, we're here to support your culinary adventures"}
                    
                    <div className="about-buttons-container text-center mt-5">
                        <button onClick={handleLearnMore} className="secondary-button">
                            {isMya ? " ထပ်မံလေ့လာရန်" : "Learn More"}
                            <ArrowForwardIcon className="ml-4" />
                        </button>
                    </div>
                    </p>
                </div>

            </div>
            {/* <LearnMore ref={learnRef} /> */}
            <HomeArticle ref={learnRef} />
        </div>
    )

}
)
export default Aboutus;