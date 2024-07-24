import React,{useEffect} from 'react';
import '../Menu.css';
import image1 from '../assets/Categories.jpeg';
import image2 from '../assets/Season.avif';
import image3 from '../assets/Ethnic.jpeg';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const recipes = [
  {
    image: image1,
    buttonText: 'Categories',
    route: '/categories'
  },
  {
    image: image2,
    buttonText: 'Seasonal Food',
    route: '/seasonalfood'
  },
  {
    image: image2,
    buttonText: 'Ethnical Food',
    route: '/ethnicalfood'
  },
];



const Menu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = (route) => {
    navigate(route);
  };

  return (

    <div className="bg-custom-gradient min-h-screen flex flex-col items-center">
    <h1 className="text-4xl font-semibold text-center pt-20 pb-5 title1">Delicioso Menus</h1>
    
    <div 
       data-aos="fade-up"
       data-aos-delay={100}                      
    className="recipe-container flex flex-wrap justify-center">
      {recipes.map((recipe, index) => (
        <div key={index} className='recipe-card transform hover:scale-105 transition duration-300' >
          <img src={recipe.image} alt={recipe.buttonText} className="recipe-image" />
          <button onClick={() => handleClick(recipe.route)} className="recipe-button">
           <p className='body1 button-text'>
           {recipe.buttonText}
            </p> 
          </button>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Menu;

