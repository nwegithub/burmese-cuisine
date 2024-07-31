import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Auth/AuthContext';
import 'tailwindcss/tailwind.css';
import '../../Style.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { useItem } from '../../Auth/ItemProvider';

const FavoritesScreen = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [ethnicalFavorites,setEthnicalFavorites] = useState([])
  const [loading, setLoading] = useState(true);
  const [ethnicalLoading,setEthnicalLoading] = useState(true)
  const navigate = useNavigate();
  const {setItem} = useItem()



  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = user ? user._id : null;
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:4000/favorites/getFavorites/${userId}`);
          setFavorites(response.data.favorites); // Directly use the fetched data
        } catch (error) {
          console.error('Error fetching favorites:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchFavorites();
  }, [user]);

  useEffect(() => {
    const ethnicalFetchFavorites = async () => {
      const userId = user ? user._id : null;
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:4000/ethnicalFavorites/getEthnicalFavorites/${userId}`);
          setEthnicalFavorites(response.data.favorites); // Directly use the fetched data
        } catch (error) {
          console.error('Error fetching favorites:', error);
        } finally {
          setEthnicalLoading(false);
        }
      }
    };
    ethnicalFetchFavorites();
  }, [user]);



  const handleNavigateToDetail = (itemData) => {
    setItem(itemData);
    navigate('/seasonalingredientdetail');
  };

  const handleNavigateToEthnicalDetail = (itemData) => {
    setItem(itemData)
    navigate('/ethnicalingredientdetail')
  }

  console.log("ehtesss",ethnicalFavorites)

  return (
    <div className="min-h-screen flex flex-col p-5 bg-custom-gradient">
      <h1 className="text-3xl font-bold">My Favorites</h1>

      {loading ? (
        <div>Loading...</div>
      ) : favorites.length === 0 ? (
        <div>No favorites found</div>
      ) : (
        <>
        <p className='title2' style={{
          paddingBottom:10
        }}>Seasonal Favorite</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <buttton 
            onClick={() => handleNavigateToDetail(item)}
            key={item._id} className="relative border p-4 rounded-lg shadow-lg">
              <img
                src={`http://localhost:4000/${item.image}`}
                alt={item.name}
                className="w-full h-50 object-cover rounded-md"
              />
              <FavoriteIcon style={{ fontSize: '3rem' }} className="absolute top-3 bottom-3 right-2 text-red-500" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              {/* Add more item details as needed */}
            </buttton>
          ))}
        </div>
        </>
      )}

{ethnicalLoading ? (
        <div>Loading...</div>
      ) : ethnicalFavorites.length === 0 ? (
        <div>No ethnicalFavorites found</div>
      ) : (
        <>
        <p className='title2' style={{
          paddingBottom:10
        }}>Ethnical Favorite</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ethnicalFavorites.map((item) => (
            <button
            onClick={() => handleNavigateToEthnicalDetail(item)}
             key={item._id} className="relative border p-4 rounded-lg shadow-lg">
              <img
                src={`http://localhost:4000/${item.image}`}
                alt={item.name}
                className="w-full h-50 object-cover rounded-md"
              />
              <FavoriteIcon style={{ fontSize: '3rem' }} className="absolute top-3 bottom-3 right-2 text-red-500" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              {/* Add more item details as needed */}
            </button>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default FavoritesScreen;
