import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dishes from './components/Dishes';
import HowTo from './components/pages/HowTo';
import Articles from './components/pages/Articles';


const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Home"  element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
        
      </div>
  );
};

export default App;
