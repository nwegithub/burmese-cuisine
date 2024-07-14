import React from "react";
import AboutBackground from '../../assets/about-background.png';
import aboutNoodle from '../../assets/noodle.png';
import "../../Style.css";
const About =React.forwardRef((props, ref) => {

    
    return (
        <div ref = {ref}>

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
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                    <p className="primary-text">
                        Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                        facilisis at fringilla quam.
                    </p>
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