import React from 'react';
import { BrowserRouter, Routes, Route,useLocation,useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowTo from './components/pages/HowTo';
import Articles from './components/pages/Articles';
import Categories from './components/Categories';
import Shop from './components/pages/Shop';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Ingredient from './components/pages/IngredientDetail';
import Readmore from './components/ReadMore';
import IngredientCalculation from './components/pages/IngredientCalculation';
import FeedBack from './components/pages/FeedBack';
import Menu from './components/Menu'
import Seasonalfood from './components/Seasonalfood';
import Ethnicalfood from './components/Ethnicalfood';
import Contactus from './components/pages/Contactus';
import FooterAboutUs from './components/FooterAboutUs';
import FavoritesScreen from './components/pages/FavouriteScreen';
import Receipe from './components/pages/Receipe';


const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Home"  element={<Home />} />
          
          <Route path="/menu" element={<Menu />} />
          
          {/* <Route path="/how-to" element={<HowTo />} /> */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/shop"  element={<Shop />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/seasonalfood" element={<Seasonalfood />} />
          <Route path="/ethnicalfood" element={<Ethnicalfood />} />
          <Route path="/IngredientDetail" element={<Ingredient/>}/>
          <Route path="/Readmore" element={<Readmore/>}/>
          <Route path="/IngredientCalculation" element={<IngredientCalculation/>} />
          <Route path="/FeedBack" element={<FeedBack/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/FooterAboutUs" element={<FooterAboutUs/>}/>
          <Route path="Favorite" element={<FavoritesScreen/>}/>
          <Route path="/Receipe" element={<Receipe/>}/>
        </Routes>
      </div>
  );
};
export default App;
