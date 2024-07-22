import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ethnicalfood = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch('http://localhost:4000/products/allProduct')
      .then(response => response.json())
      .then(data => {
        setProduct(data.result || []);
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, []);

  useEffect(() => {
    if (category) {
      setFilterProduct(product.filter(item => item.category === category));
    } else {
      setFilterProduct(product);
    }
  }, [category, product]);



  if (!filterProduct.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-custom-gradient">
      <h1 className="text-4xl text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterProduct.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-aos="fade-up"
            data-aos-delay={100} 
            className="border-2 border-gray-300 rounded-lg"
            style={{
              backgroundColor: hoveredIndex === index ? '#b8860b' : 'white',
              height: 290,
              transition: 'transform 0.3s ease', // Smooth transition for scaling
              transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)', // Slightly larger on hover
            }}
          >
            <img
              className="w-full h-4/5 object-cover rounded-t-lg"
              src={`http://localhost:4000/${item.image}`}
              alt="img"
            />
            {hoveredIndex === index ? (
              <div className="flex justify-center space-x-2 items-center" style={{ height: '20%' }}>
                <Button
                                  style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}

                 onClick={() => navigate('/IngredientDetail', { state: { item } })}>
                  Ingredients
                </Button>
                <Button
                  onClick={() => console.log('Open recipe modal')} // Add your modal logic
                  style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}
                >
                  Recipe
                </Button>
              </div>
            ) : (
              <div className="h-1/5 flex items-center justify-center" style={{backgroundColor:'#b8860b'}}>
                <h3 className="body1 text-white">
                  {item.name}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ethnicalfood;
