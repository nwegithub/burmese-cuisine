import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../assets/Categories.jpeg';
import image2 from '../assets/Season.avif';
import image3 from '../assets/Ethnic.jpeg';
import '../Footer.css';
import { useAuth } from '../Auth/AuthContext';
import Footer from '../components/pages/Footer';

const Menu = (item) => {
  const navigate = useNavigate();
  const { user, isMya } = useAuth();

  const recipes = [
    {
      image: image1,
      buttonText: isMya ? 'အမျိုးအစားများ' : 'Categories',
      route: '/categories'
    },
    {
      image: image2,
      buttonText: isMya ? 'ရာသီအစားအစာများ' : 'Seasonal Food',
      route: '/seasonalfood'
    },
    {
      image: image3,
      buttonText: isMya ? 'တိုင်းရင်းသားအစားအစာများ' : 'Ethnical Food',
      route: '/ethnicalfood'
    },
  ];

  const handleFeedbackClick = (item) => {
    if (user) {
      navigate("/Feedback", { state: { item } }); // Navigate and pass state
    } else {
      navigate("/Login", { state: { item } }); // Navigate and pass state
    }
  };

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
    margin: '8px',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    flex: '0 0 auto', // Prevents shrinking or growing
    width: '390px', // Increased width
    height: '400px', // Increased height
  };

  const recipeImageStyle = {
    width: '90%',
    height: '80%', // Adjust height as needed
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const recipeButtonStyle = {
    backgroundColor: '#42eff5',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '90%',
  };

  return (
    <div className="bg-custom-gradient min-h-screen items-center">
      <h1 style={titleStyle} className='title1'>{isMya ? "အရသာရှိသောစားသောက်ဖွယ်ရာမီနူးများ" : "Flavorful Menus"}</h1>
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
            <button className='body1 button-text' style={recipeButtonStyle} onClick={() => handleClick(recipe.route)}>
              <p>{recipe.buttonText}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="customer-review-container"
        style={{ paddingBottom: "20%", marginTop: 20 }} >
        <button
          className="button-52 border-2 rounded-lg border-yellow-900 hover:bg-white-500 hover:text-white transition-all duration-300"
          onClick={() => handleFeedbackClick(item)}>
          {isMya ? "အကြုံပြုချက်ပေးရန်" : " Customer Feedback"}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
