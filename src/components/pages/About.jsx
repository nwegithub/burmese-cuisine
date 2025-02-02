import React from "react";
import AboutBackground from '../../assets/about-background.png';
import aboutNoodle from '../../assets/noodle.png';
import "../../Style.css";
import { useAuth } from '../Auth/AuthContext';

const About = React.forwardRef((props, ref) => {
    const { isMya, setIsMya } = useAuth();

    return (
        <div ref={ref}>

            <div className="about-section-container">
                <div className="about-background-image-container">
                    <img src={AboutBackground} alt="" />
                </div>
                <div className="about-section-image-container">
                    <img src={aboutNoodle} alt="" />
                </div>
                <div className="about-section-text-container">
                    <p className="primary-subheading">About</p>
                    <h1 className="primary-heading">
                        Food Is An Important Part Of A Balanced Diet
                    </h1>
                    <p className="primary-text">
                        {isMya ? "ကျွန်မတို့၏မစ်ရှင်သည် ရိုးရှင်းပါသည်- လူကြီးမင်းတို့၏ အချက်အပြုတ်နှင့်ပတ်သတ်တဲ့သိချင်စိတ်ကို လှုံ့ဆော်ရန်၊ ချက်ပြုတ်ခြင်းပညာပေးရန်နှင့် ကျေနပ်စေရန်တို့ဖြစ်သည်။အစားအစာသည် စားရေးသောက်ရေးသာမကဘဲ လူများစုပေါင်း၍ ယဉ်ကျေးမှုများ မျှဝေရန်နှင့် ထာဝရအမှတ်တရများဖန်တီးရန် နည်းလမ်းတစ်ခုဖြစ်သည်ဟု ကျွန်ုမတို့ယုံကြည်ပါသည်။လူကြီးမင်းသည်စားဖိုမှူးသို့မဟုတ် အိမ်ရှင်မဖြစ်နေပါစေ လူကြီးမင်း၏အချက်အပြုတ်စွန့်စားခန်းများကို ကူညီပံ့ပိုးရန်ကျွန်မတို့ဤနေရာတွင်ရှိနေပါသည်။" : "At [Myanmar Cuisine], our mission is simple: to inspire, educate, and satisfy your culinary curiosities. We believe that food is not just sustenance but a means to bring people together, share cultures, and create lasting memories. Whether you're a seasoned chef or a home cook, we're here to support your culinary adventures"}
                        
                    </p>
                    {/* <p className="primary-text">
                        Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                        facilisis at fringilla quam.
                    </p> */}
                    <div className="about-buttons-container">
                        <button className="secondary-button">Learn More</button>
                        {/* <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
})
export default About;