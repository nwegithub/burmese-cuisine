import React, { useState } from 'react';
import axios from 'axios';
import '../../Feedback.css';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user } = useAuth();
  const userId = user && user._id
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/feedback/createFeedback', {
        comment,
        user: userId
      });

      if (response.status === 201) {
        setSuccess('Feedback submitted successfully!');
        setComment('');
        alert('Thank you for your review')
        navigate('/Customer');

      }
    } catch (error) {
      setError('Failed to submit feedback');
    }
  };

  console.log("user", userId)

  return (
    <div className="feedback-container bg-custom-gradient h-screen">
      <div className="modal">
        <div className="modal-header">
          <h2>Our Myanmar Cuisine value your opinion.</h2>
        </div>
        <div className="modal-body">
          <p>How would you rate your overall experience?</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Kindly take a moment to tell us what you think."
            className="p-4 border rounded-md w-full h-32 resize-none"
          ></textarea>
        </div>
        <div className="modal-footer">
          <button className="feedback-button" onClick={handleSubmit}>Share my feedback</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default Feedback;
