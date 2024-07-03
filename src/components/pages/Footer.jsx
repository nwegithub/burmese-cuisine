import React from "react";
const Footer = () => {
    return (
        <div class="container">
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <div class="sec aboutus">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Facere earum magnam laborum dolorum ad inventore. Ratione tempore
                          officiis reprehenderit accusantium corrupti iusto eligendi
                        perspiciatis modi officia ut! Assumenda, sint doloribus.</p>
                    <ul className="social_icon">
                        <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                </div>
                 <div class="sec quicklinks">
                    <h2>Support</h2>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="sec quicklinks">
                    <h2>Shop</h2>
                    <ul>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Shoes</a></li>
                    </ul>
                </div>
                <div className="sec contact">
                    <ul class="info">
                        <li>
                            <span><i class="fa-solid fa-phone"></i></span><p>
                                <a href="tel:++9509766957373">+9509766957373</a>
                            </p>
                        </li>
                        <li>
                            <span><i class="fa-solid fa-envelope"></i></span><p>
                                <a href="mailto:knowmore@email.meee">knowmore@email.com</a>
                            </p>
                        </li>
                    </ul>
                    <h2>Contact Us</h2>
                </div>
            
            </footer>
            
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        </div>
    )
}
export default Footer;

// import React from 'react';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';
// import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

// const Footer = ({ isSearchFocused }) => {
//     return (
//         <footer className={`mt-10 border-t-header border shadow-header shadow-inner ${isSearchFocused && "-z-10 relative"}`}>
//             <div className="md:sm:mx-14 flex-none sm:md:flex justify-between">
//                 <div className="mt-4">
//                     <div className="flex sm:md:flex-col justify-center items-center">
//                         <img
//                             className="object-cover w-60 ml-0 sm:md:ml-12"
//                             src={require("../Assets/images/officiallogo.png")}
//                             alt="official logo"
//                         />
//                     </div>
//                     <div className="mt-4 flex sm:md:flex-none justify-center items-center">
//                         <span className="font-fontbody text-comTxt font-semibold text-lg tracking-wide">
//                             Timeless allure for the discerning spirit
//                         </span>
//                     </div>
//                     <div className="flex items-center justify-center space-x-6 mt-3 ">
//                         <button>
//                             <FacebookSharpIcon style={{ width: "30px", height: "30px" }} />
//                         </button>
//                         <button>
//                             <InstagramIcon style={{ width: "30px", height: "30px" }} />
//                         </button>
//                         <button>
//                             <TwitterIcon style={{ width: "30px", height: "30px" }} />
//                         </button>
//                     </div>
//                 </div>
//                 <span className="flex md:sm:hidden w-full h-0.5 bg-header mt-4"></span>
//                 <div className="mt-5 mr-0 sm:md:mr-10">
//                     <div className="flex justify-center items-center">
//                         <h1 className="font-fontbody text-comTxt font-semibold text-xl tracking-wider">
//                             Quick Menu
//                         </h1>
//                     </div>
//                     <div className="text-center mt-5">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 Treasures
//                             </span>
//                             <span className="absolute inset-0 top-5 bg-header transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//                         </button>
//                     </div>
//                     <div className="text-center mt-5">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 Best Seller
//                             </span>
//                             <span className="absolute inset-0 top-5 bg-header transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//                         </button>
//                     </div>
//                     <div className="text-center mt-5">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 New Arrivals
//                             </span>
//                             <span className="absolute inset-0 top-5 bg-header transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//                         </button>
//                     </div>
//                     <div className="text-center mt-5">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 Top Rated
//                             </span>
//                             <span className="absolute inset-0 top-5 bg-header transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//                         </button>
//                     </div>
//                 </div>
//                 <span className="flex md:sm:hidden w-full h-0.5 bg-header mt-4"></span>
//                 <div className="mt-5">
//                     <div className="flex justify-center items-center">
//                         <span className="font-fontbody text-comTxt font-semibold text-xl tracking-wider">
//                             Help & Information
//                         </span>
//                     </div>
//                     <div className="text-center mt-5">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 Contact Us
//                             </span>
//                             <span className="absolute inset-0 top-5 bg-header transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//                         </button>
//                     </div>
//                     <div className="text-center mt-3">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 Delivery
//                             </span>
//                             <span className="absolute inset-0 top-5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-header"></span>
//                         </button>
//                     </div>
//                     <div className="text-center mt-3">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">FAQs</span>
//                             <span className="absolute inset-0 top-5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-header"></span>
//                         </button>
//                     </div>
//                     <div className="text-center mt-3">
//                         <button className="relative group">
//                             <span className="font-fontbody text-comTxt text-md tracking-wider">
//                                 Terms and Conditions
//                             </span>
//                             <span className="absolute inset-0 top-5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bg-header"></span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-center items-center border-t-header border py-2 mt-14 space-x-2">
//                 <h2 className="font-fontbody text-comTxt text-lg">Copy right</h2>
//                 <CopyrightTwoToneIcon />
//                 <span>2024</span>
//                 <span className="font-fontbody text-comTxt">Scent-Sense.</span>
//                 <span>All rights reserved</span>
//             </div>
//         </footer>
//     );
// }
// export default Footer;
