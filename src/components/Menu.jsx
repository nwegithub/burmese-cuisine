import React from 'react';
import '../Menu.css';
import image1 from '../assets/Categories.jpeg';
import image2 from '../assets/Season.avif';
import image3 from '../assets/Ethnic.jpeg';
import { useNavigate } from 'react-router-dom';

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
    image: image3,
    buttonText: 'Ethnical Food',
    route: '/ethnicalfood'
  },

];

const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (

    <div  style={{backgroundColor:'#FFEDAC', padding:'20px'}}>
    
      <h1 className="text-4xl font-semibold text-center pt-5 pb-5 border-2 border-solid border-black">Delicioso Menus</h1>
      
    <div className="recipe-container">
     
      {recipes.map((recipe, index) => (
        <div key={index} style={{height:350,width:200,margin:20}}>
          <img src={recipe.image} alt={recipe.buttonText} className="recipe-image" />
          <button onClick={() => handleClick(recipe.route)} className="recipe-button">
            {recipe.buttonText}
          </button>
        </div>
      ))}
    </div>

    </div>
  );
};

export default Menu;

