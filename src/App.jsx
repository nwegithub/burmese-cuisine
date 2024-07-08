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

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Home"  element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/shop"  element={<Shop />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/IngredientDetail" element={<Ingredient/>}/>
          <Route path="/Readmore" element={<Readmore/>}/>
        </Routes>
      </div>
  );
};
export default App;
