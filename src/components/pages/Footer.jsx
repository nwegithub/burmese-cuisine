import React from "react";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
            <ul className="social_icon">
                <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
            <p></p>
       <ul className="menu"></ul>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
       <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        
        </div>
        
            
       
    )
}
export default Footer;