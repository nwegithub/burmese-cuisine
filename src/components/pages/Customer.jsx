import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Auth/AuthContext';

const ReviewCard = ({ user, comment }) => (


  <div className="bg-white p-10 rounded-lg text-center">
    <div className="flex justify-center bg-blue-300 p-3">
      {user.profileImage ? (
        <img
          src={user.profileImage}
          alt={user.name}
          className="rounded-full object-cover w-16 h-16" // Adjust size as needed
        />
      ) : (
        <FontAwesomeIcon icon={faUser} className="w-16 h-16 text-gray-500 mb-2" />
      )}
    </div>
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold text-black mb-2">{user.name}</p>
      <p className="text-lg text-black mb-4 overflow-hidden text-ellipsis whitespace-normal break-words max-w-full">
        {comment}
      </p>
    </div>

    <div className="flex justify-center">
      {[...Array(user.rating || 3)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.909l6.561-.954L10 0l3.439 5.955L20 6.909l-5.244 4.636 1.122 6.545z" />
        </svg>
      ))}
    </div>
  </div>
);

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {isMya} = useAuth()

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/feedback/allFeedback');
        // Assuming each review object has a 'date' property for sorting
        const sortedReviews = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setReviews(sortedReviews);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Server error');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="min-h-screen p-8 bg-custom-gradient">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">{isMya?'အဖွဲ့ဝင်များရဲ့ အကြုံပြုချက်များ':'Customer Reviews'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.isArray(reviews) && reviews.map((review) => (
            <ReviewCard
              key={review._id} // Ensure unique key
              user={review.user} // Pass the whole user object if needed
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
