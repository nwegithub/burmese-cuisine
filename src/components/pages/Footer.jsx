import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const aboutRef = useRef(null);

    const handleGet = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const navigate = useNavigate()
    const handleAboutUsClick = () => {
        navigate('/FooterAboutUs')
    }

    const handleClick = () => {
        navigate("/Contactus");
    }
    const handleHome = () => {
        navigate("/Home");
    }
    const handleMenu = () => {
        navigate("/Menu");
    }

    return (


        <div
            style={{ marginTop: 200 }}>
            <footer >
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>

                <div style={{ display: "flex flex-row", justifyContent: "center", alignSelf: "center" }}>
                    <div className="sec aboutus"
                        style={{ alignItems: "center", justifyContent: "center" }}>
                        {/* <button style={{textAlign:"center"}} onClick={() => handleAboutUsClick()}>
                        <h5 style={{textAlign:"center"}}>About Us</h5>

                        </button>
                        <p style={{textAlign : "justify"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere earum
                            magnam laborum dolorum ad inventore. Ratione tempore officiis reprehenderit
                            accusantium corrupti iusto eligendi perspiciatis modi officia ut! Assumenda,
                            sint doloribus.
                        </p> */}
                        <ul className="social_icon" style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>
                            <li><a href="https://www.facebook.com/tastewindowfoodmagazinemyanmar?mibextid=LQQJ4d"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li><a href="https://x.com/homevsfastfood?s=21&t=RQam9jhhLf1_6Un1a7yMJw"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            <li><a href="https://www.instagram.com/cookwithnabeela?igsh=b251eWZyMG15bnM="><ion-icon name="logo-instagram"></ion-icon></a></li>
                        </ul>



                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignSelf: "center", gap: "15px" ,fontSize:"15px"}}>
                        <button onClick={() => handleHome()} style={{ fontStyle: "italic" }}>Home</button>
                        <button onClick={() => handleAboutUsClick()} style={{ fontStyle: "italic" }}>About Us</button>
                        <button onClick={() => handleClick()} style={{ fontStyle: "italic" }}>Contact us</button>
                        <button onClick={() => handleMenu()} style={{ fontStyle: "italic" }}>Menu</button>
                    </div>
                    <div style={{display: "flex",justifyContent:"center",alignSelf: "center",paddingTop:"6px"}}>
                        @2024MyanmarCuisine
                    </div>
                    {/* <div className="sec quicklinks"
                    style={{alignItems:"center",justifyContent:"center",textAlign : 'center'}}>
                        <h5>Support</h5>
                        
                            <p><a href="#">FAQ</a></p>
                            <p><a href="#">Help</a></p>
                            <p><a href="#">Contact</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                    </div> */}
                    {/* <div className="sec quicklinks">
                        <h5>Shop</h5>
                        <ul>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Shoes</a></li>
                        </ul>
                    </div> */}
                    {/* <div className="sec contact"
                    style={{alignItems:"center",justifyContent:"center",textAlign : 'center'}}>
                       <button onClick={() => handleClick()}>Contact us</button>
                        <p><a>+959774272642</a></p>
                        <p><a>winthandar112000@gmail.com</a></p>
                    </div> */}
                </div>

            </footer>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        </div>
    )
}
export default Footer;