import React from 'react';
import '../Menu.css';
import image1 from '../assets/noodle.png';
import image2 from '../assets/pic1.jpg';
import image3 from '../assets/R.jpeg';
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
  }
];

const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <img src={recipe.image} alt={recipe.buttonText} className="recipe-image" />
          <button onClick={() => handleClick(recipe.route)} className="recipe-button">
            {recipe.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

