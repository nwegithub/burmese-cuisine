import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Auth/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LearnMore = React.forwardRef((props, ref) => {
  const { user,isMya } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);


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

  return (
    <div ref={ref} style={{marginTop:30,
    }}>
      <div style={{ marginTop: "10vh", paddingTop: 10,  textAlign: 'center', }}>
        {loading ? (
          <div>Loading...</div>
        ) : favorites.length === 0 ? (
          <div>No favorites found</div>
        ) : (
          <div style={{}}>
            <h1 className='title1'>{isMya? "လူကြိုက်များသောအစားအစာများ" : "People Most Enjoyable Food"}</h1>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              flexWrap: 'wrap',
              marginTop:30,
              padding: '5%',backgroundColor: '#6FDCE3',
              minHeight:"60vh",            }}>
              {favorites.map((item, index) => (
                <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                  <img
                    src={`http://localhost:4000/${item.productId.image}`}
                    alt={item.name}
                    className="round-image w-70 h-70"
                  />
                  <p className='body1' style={{marginTop : '15px'} }>{isMya ? item.productId.name_mm : item.productId.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
)

export default LearnMore;