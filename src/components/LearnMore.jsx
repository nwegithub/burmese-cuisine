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
  const {setItem} = useItem()

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

  const handleNavigateToDetail = (itemData) => {
    setItem(itemData);
    navigate('/seasonalingredientdetail');
  };

  console.log("fav",favorites)

if(favorites.length === 0){
  return null
}
  return (
    <div ref={ref} style={{ marginTop: 30 }}>

<div style={{ marginTop: "10vh", paddingTop: 10, textAlign: 'center' }}>
<h1 className='title1'>{isMya ? "လူကြိုက်များသောအစားအစာများ" : "People Most Enjoyable Food"}</h1>

  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '5%',
    backgroundColor: '#6FDCE3',
    minHeight: "60vh",
    marginTop: 30,
    scrollbarWidth: 'none', // For Firefox to hide scrollbar
      msOverflowStyle: 'none',
  }}>
    {favorites.map((item, index) => (
      <div key={index} style={{ 
        display: 'inline-block', 
        margin: '10px', 
        textAlign: 'center',
        flex: '0 0 auto', // Prevents the item from shrinking
      }}>
        {item.productId && item.productId.image ? (
          <>
            <img
              src={`http://localhost:4000/${item.productId.image}`}
              alt={item.productId.name}
              className="round-image"
              style={{ width: '150px', height: '150px', borderRadius: '50%' }} // Maintains fixed image size
            />
            <p className='body1' style={{ marginTop: '15px' }}>
              {isMya ? item.productId.name_mm : item.productId.name}
            </p>
          </>
        ) : (
          <p>Image not available</p>
        )}
      </div>
    ))}
  </div>

</div>
</div>
  );
});

export default LearnMore;




