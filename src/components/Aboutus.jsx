import React,{useRef}from "react";
import AboutBackground from '../assets/aboutBackground.png';
import noodle from '../assets/noodle.png';
import '../Style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LearnMore from "../components/LearnMore";

const Aboutus = React.forwardRef((props,ref) => {
    const learnRef=useRef(null);
  
  const handleGet = () => {
    learnRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <div ref={ref}>
    <div className="about-section-container min-h-screen flex">
        <div className="about-background-image-container flex justify-center items-center">
            <img src={AboutBackground} alt="" className="max-w-xs h-200px" />
        </div>
        <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="about-section-image-container">
            <img src={noodle}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
                data-aos-once="true" />
        </div>
        <div className="about-section-text-container  p-8 md:p-8">
            <h1 className="primary-heading">
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <p className="primary-text">
                Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                facilisis at fringilla quam.
            </p>
            <div className="about-buttons-container">
                <button onClick={handleGet} className="secondary-button">Learn More
                    <ArrowForwardIcon className="ml-4" /></button>
            </div>
        </div>
    </div>
    <LearnMore ref={learnRef}/>
    </div>
)
 }
)
export default Aboutus;

