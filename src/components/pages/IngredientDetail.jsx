import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import '../../Style.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useItem } from '../../Auth/ItemProvider';


const IngredientDetail = () => {
  const { item } = useItem();
  const { isMya, user } = useAuth();

  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const userId = user && user._id;


  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        // Check local storage first
        const localFavoriteStatus = localStorage.getItem(`favorite_${userId}_${item._id}`);
        if (localFavoriteStatus !== null) {
          setIsFavorite(localFavoriteStatus);
        } else {
          // Fetch from the server if not in local storage
          const response = await axios.get(`http://localhost:4000/favorites/isFavorited/${userId}/${item._id}`);
          setIsFavorite(response.data.isFavorited);
          localStorage.setItem(`favorite_${userId}_${item._id}`, JSON.stringify(response.data.isFavorited));
        }
      } catch (error) {
        console.error('Error fetching favorite status:', error);
      }
    };

    if (userId && item._id) {
      checkFavoriteStatus();
    }
  }, [userId, item._id]);


  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await axios.delete('http://localhost:4000/favorites/deleteFavorite', {
          data: {
            userId: userId,
            productId: item._id
          }
        });
        localStorage.removeItem(`favorite_${userId}_${item._id}`);
        alert("Delete Successful");
      } else {
        await axios.post('http://localhost:4000/favorites/addFavorite', {
          userId: userId, // Replace with actual userId
          productId: item._id
        });
        localStorage.setItem(`favorite_${userId}_${item._id}`, JSON.stringify(true));
        alert("Added Successfully");
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (!item) {
    return <div>..Loading</div>
  }

  return (
    <div className="min-h-screen bg-custom-gradient">
      <div style={{
        width: '40vw', // 30% of the viewport width
        margin: '0 auto', // Center horizontally
        transition: 'transform 0.3s ease', // Smooth transition for scaling
        backgroundColor: 'white'
      }}>
        <div className="flex flex-col "
        style={{width:'100%'}}
        >

<div className='ext-center bg-custom-gradient p-4 rounded-lg shadow-md flex-1 mx-2'>
          <h1 className='title1'>{isMya ? item.name_mm : item.name}</h1>

          </div>
          
            <img
              src={`http://localhost:4000/${item.image}`}
              alt="img"
              style={{ marginTop: '5px', width: '100%' }}
            />
         
        
          <h1 className='title2'>{isMya ? "ပါဝင်ပစ္စည်းများ" : "Our family Secret Ingredients"}</h1>

          <div className="flex justify-center items-center mb-5">
            <button
              onClick={() => {
                user ?
                  toggleFavorite() :
                  navigate('/Login')
              }}
              className={`relative px-4 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-green-500'} text-white flex items-center justify-center`}
            >
              {isFavorite ? (
                <FavoriteIcon
                  style={{ fontSize: '3rem' }}
                  className="text-white"
                />
              ) : (
                <FavoriteBorderIcon
                  style={{ fontSize: '3rem' }}
                  className="text-white"
                />
              )}
            </button>
          </div>
        </div>

        <div style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          {(isMya ? item.ingredients_mm : item.ingredients).map((ingredient, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg flex items-center justify-center mb-5 hover:bg-gray-100 hover:shadow-lg transition duration-300"
              style={{
                height: 60,
                width: '30vw', // 30% of the viewport width
                margin: '0 auto', // Center horizontally
                transition: 'transform 0.3s ease', // Smooth transition for scaling
              }}
            >
              <p className='body1'>
                {ingredient.name} : {ingredient.amount} {ingredient.unit}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center flex-grow mb-40" style={{paddingTop:30,paddingBottom:30}}>
          <button
            className='bg-custom-gradient'
            style={{

              color: 'black',
              paddingTop: '2px',
              paddingBottom: '2px',
              width: '350px',
              height: '70px',
              borderRadius: 10,
            }}
            onClick={() => navigate("/IngredientCalculation", { state: { item } })}
          >
            <p className='title3'>
              {isMya ? "ပါဝင်ပစ္စည်းများတွက်ချက်ရန်" : "  Ingredients Calculation"}
            </p>
          </button>
        </div>
      </div>
    </div>

  );

}

export default IngredientDetail;
