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
import IngredientCalculation from './components/pages/SeasonalCalculation';
import FeedBack from './components/pages/FeedBack';
import Menu from './components/Menu'
import Seasonalfood from './components/Seasonalfood';
import Ethnicalfood from './components/Ethnicalfood';
import Contactus from './components/pages/Contactus';
import FooterAboutUs from './components/FooterAboutUs';
import FavoritesScreen from './components/pages/FavouriteScreen';
import EthnicalRecipe from './components/pages/EthnicalRecipe';
import SeasonalRecipe from './components/pages/SeasonalReceipe';

import Customer from'./components/pages/Customer';
import FAQ from './components/pages/FAQ';
import EthnicalIngredientDetail from './components/pages/EthnicalIngredientDetail';
import SeasonalIngredientDeatail from './components/pages/SeasonalIngredientDetail';
import { AuthProvider } from './Auth/AuthContext';
import { ItemProvider } from './Auth/ItemProvider';
import test from './src/test'
import Feed from './src/Feed';
import VideoDetail from './src/VideoDetail'
import SearchFeed from './src/SearchFeed'
import ChannelDetail from './src/ChannelDetail'
import EthnicalCalculation from './components/pages/EthnicalCalculation';


const App = () => {
  return (
      <AuthProvider>
        <ItemProvider>
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
          <Route path="/seasonalfood/:id" element={<SeasonalIngredientDeatail/>}/>
          <Route path="/seasonalCalculation/:id" element={<IngredientCalculation/>} />
          <Route path="/seasonalRecipe/:id" element={<SeasonalRecipe/>}/>


          <Route path="/ethnicalfood" element={<Ethnicalfood />} />
          <Route path="/ethnicalfood/:id" element={<EthnicalIngredientDetail/>}/>
          <Route path="/ethnicalRecipe/:id" element={<EthnicalRecipe/>}/>
          <Route path="/ethnicalCalculation/:id" element={<EthnicalCalculation/>}/>

          <Route path="/IngredientDetail" element={<Ingredient/>}/>
          <Route path="/Readmore" element={<Readmore/>}/>
          <Route path="/FeedBack" element={<FeedBack/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/FooterAboutUs" element={<FooterAboutUs/>}/>
          <Route path="Favorite" element={<FavoritesScreen/>}/>
          <Route path="/Customer" element={<Customer/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/Feed" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          

        </Routes>
        </ItemProvider>
      </AuthProvider>
  );
};
export default App;
