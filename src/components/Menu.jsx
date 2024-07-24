// import React,{useEffect} from 'react';
// import '../Menu.css';
// import image1 from '../assets/Categories.jpeg';
// import image2 from '../assets/Season.avif';
// import image3 from '../assets/Ethnic.jpeg';
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const recipes = [
//   {
//     image: image1,
//     buttonText: 'Categories',
//     route: '/categories'
//   },
//   {
//     image: image2,
//     buttonText: 'Seasonal Food',
//     route: '/seasonalfood'
//   },
//   {
//     image: image3,
//     buttonText: 'Ethnical Food',
//     route: '/ethnicalfood'
//   },
// ];



// const Menu = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleClick = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="bg-custom-gradient min-h-screen flex flex-col items-center">
//     <h1 className="text-4xl font-semibold text-center pt-20 pb-5 title1">Delicioso Menus</h1>
//     <div 
//        data-aos="fade-up"
//        data-aos-delay={100}                      
//     className="recipe-container flex flex-wrap justify-center">
//       {recipes.map((recipe, index) => (
//         <div key={index} className='recipe-card transform hover:scale-105 transition duration-300' >
//           <img src={recipe.image} alt={recipe.buttonText} className="recipe-image" />
//           <button onClick={() => handleClick(recipe.route)} className="recipe-button">
//            <p className='body1 button-text'>
//            {recipe.buttonText}
//             </p> 
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
  
//   );
// };

// export default Menu;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../assets/Categories.jpeg';
import image2 from '../assets/Season.avif';
import image3 from '../assets/Ethnic.jpeg';

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = (route) => {
    navigate(route);
  };

  const containerStyle = {
    background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)', // Example gradient
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const recipeContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflowX: 'auto', // Allows horizontal scrolling if needed
    padding: '20px 0',
  };

  const recipeCardStyle = {
    margin: '10px',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    flex: '0 0 auto', // Prevents shrinking or growing
  };

  const recipeImageStyle = {
    width: '225px',
    height: '225px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const recipeButtonStyle = {
    backgroundColor: '#42eff5',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '7px 15px',
    cursor: 'pointer',
    // fontSize: '0.9rem',
    marginTop: '7px',
    width: '225px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle} className='title1'>Delicioso Menus</h1>
      <div data-aos="fade-up" data-aos-delay={100} style={recipeContainerStyle}>
        {recipes.map((recipe, index) => (
          <div
            key={index}
            style={recipeCardStyle}
            onClick={() => handleClick(recipe.route)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={recipe.image} alt={recipe.buttonText} style={recipeImageStyle} />
            <button className='body1 button-text' style={recipeButtonStyle} onClick={() => handleClick(recipe.route)} >
              <p>{recipe.buttonText}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
