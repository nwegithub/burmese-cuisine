import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Auth/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useNavigate } from 'react-router-dom';
// import { useItem } from '../../Auth/ItemProvider';
import { useNavigate } from 'react-router-dom';
import { useItem } from '../Auth/ItemProvider';

const LearnMore = React.forwardRef((props, ref) => {
  const { user, isMya } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { setItem } = useItem()

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false, // Animation happens only once
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:4000/favorites/allFavorite');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, [favorites]);

  const handleNavigateToDetail = (id) => {
    navigate(`/seasonalfood/${id}`);

  };

  console.log("fff", favorites)

  if (favorites.length === 0) {
    return null
  }
  return (
    <div className='min-h-screen' ref={ref} style={{ marginTop: 30 }}>
      <div style={{ marginTop: "10vh", paddingTop: 10, textAlign: 'center' }}>
        <h1 data-aos="fade-left" className='title1'>{isMya ? "လူကြိုက်များသောရာသီစာများ" : "People Most Enjoyable Food"}</h1>
        <div data-aos="fade-left" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '5%',
          // backgroundColor: '#e48f0f',
          minHeight: "60vh",
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          {favorites.map((item, index) => (
            <button
              onClick={() => handleNavigateToDetail(item.productId._id)}
              key={index} style={{
                display: 'inline-block',
                margin: '10px',
                textAlign: 'center',
                padding: 20,
                flex: '0 0 auto', // Prevents the item from shrinking
              }}>
              {item.productId && item.productId.image ? (
                <>
                  <div style={{ borderRadius: '50%',justifyItems:'center'}}>
                    <img
                      src={`http://localhost:4000/${item.productId.image}`}
                      alt={item.productId.name}
                      className="round-image"
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        boxShadow: '0px 4px 8px rgba(228, 143, 15, 0.6)', // Adds shadow to the image
                        borderWidth:2,borderColor:'red'
                      }}
                    />
                  </div>
                  <p className='body1' style={{ marginTop: '15px', backgroundColor: '#e48f0f', padding: 5, borderRadius: 5 }}>
                    {isMya ? item.productId.name_mm : item.productId.name}
                  </p>

                </>
              ) : (
                <p>Image not available</p>
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
});

export default LearnMore;




