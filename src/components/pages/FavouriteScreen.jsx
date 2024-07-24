import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Auth/AuthContext';
import 'tailwindcss/tailwind.css';
import '../../Style.css';

const FavoritesScreen = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = user ? JSON.parse(user)._id : null;

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

  return (
    <div className="min-h-screen flex flex-col p-5 bg-custom-gradient">
      <h1 className="text-3xl font-bold mb-5">My Favorites</h1>

      {loading ? (
        <div>Loading...</div>
      ) : favorites.length === 0 ? (
        <div>No favorites found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={`http://localhost:4000/${item.image}`} // Ensure the path is correct
                alt={item.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              {/* Add more item details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesScreen;
