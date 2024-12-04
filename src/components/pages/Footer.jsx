import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment';

const Footer = () => {
    const aboutRef = useRef(null);

    const handleGet = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const navigate = useNavigate();
    const handleAboutUsClick = () => {
        navigate('/FooterAboutUs');
    };

    const handleClick = () => {
        navigate("/Contactus");
    };
    const handleClickFAQ = () => {
        navigate("/FAQ");
    };
    const handleHome = () => {
        navigate("/Home");
    };
    const handleMenu = () => {
        navigate("/menu");
    };

    return (
        <div style={{ marginTop: 200 }}>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>

                <div style={{ display: "flex flex-row", justifyContent: "center", alignSelf: "center" }}>
                    <div className="sec aboutus"
                        style={{ alignItems: "center", justifyContent: "center" }}>
                        <ul className="social_icon"
                            style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <li>
                                <a href="eithinzarphyo430@gmail.com">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@myanmarcuisine-z9j?si=8pDnUsHCFo05_1Di">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="/Feedback">
                                    <CommentIcon style={{ fontSize: 35 }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignSelf: "center", gap: "15px", fontSize: "15px" }}>
                        <button onClick={() => handleHome()} style={{ fontStyle: "italic" }}>Home</button>
                        <button onClick={() => handleAboutUsClick()} style={{ fontStyle: "italic" }}>About Us</button>
                        <button onClick={() => handleClick()} style={{ fontStyle: "italic" }}>Contact us</button>
                        <button onClick={() => handleClickFAQ()} style={{ fontStyle: "italic" }}>FAQ</button>
                        <button onClick={() => handleMenu()} style={{ fontStyle: "italic" }}>Menu</button>
                        <button onClick={() => navigate('/Feed')} style={{ fontStyle: "italic" }}>YouTube</button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignSelf: "center", paddingTop: "6px" }}>
                        @2024MyanmarCuisine
                    </div>
                </div>
            </footer>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
    );
}

export default Footer;
