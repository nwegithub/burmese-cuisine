import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HowTo from './components/pages/HowTo';
import Articles from './components/pages/Articles';

import Categories from './components/Categories';
import Shop from './components/pages/Shop';


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
        </Routes>
      </div>
  );
};
export default App;
