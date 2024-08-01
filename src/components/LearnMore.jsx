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
    <div ref={ref} style={{ marginTop: 30 }}>

      <div style={{ marginTop: "10vh", paddingTop: 10, textAlign: 'center' }}>
        <h1 className='title1'>{isMya ? "လူကြိုက်များသောရာသီစာများ" : "People Most Enjoyable Food"}</h1>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: '5%',
          // backgroundColor: '#e48f0f',
          minHeight: "60vh",
          scrollbarWidth: 'none', // For Firefox to hide scrollbar
          msOverflowStyle: 'none',
        }}>
          {favorites.map((item, index) => (
            <button
              onClick={() => handleNavigateToDetail(item.productId._id)}
              key={index} style={{
                display: 'inline-block',
                margin: '10px',
                textAlign: 'center',
                // backgroundColor:'#e48f0f',
                padding: 20,
                flex: '0 0 auto', // Prevents the item from shrinking
              }}>
              {item.productId && item.productId.image ? (
                <>
                  <div style={{ borderWidth: 2, borderColor: '#e48f0f', borderRadius: '50%' }}>
                    <img
                      src={`http://localhost:4000/${item.productId.image}`}
                      alt={item.productId.name}
                      className="round-image"
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        boxShadow: '0px 4px 8px rgba(228, 143, 15, 0.6)' // Adds shadow to the image
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




