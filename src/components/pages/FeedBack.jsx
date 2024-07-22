import React, { useState } from 'react';
import axios from 'axios';
import '../../Feedback.css';
import { useAuth } from '../../Auth/AuthContext';

const Feedback = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user } = useAuth();
  const userId = user && JSON.parse(user)._id

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

      }
    } catch (error) {
      setError('Failed to submit feedback');
    }
  };

  console.log("user",userId)

  return (
    <div className="feedback-container bg-custom-gradient h-screen">
      <div className="modal">
        <div className="modal-header">
          <h2>We value your opinion.</h2>
        </div>
        <div className="modal-body">
          <p>How would you rate your overall experience?</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Kindly take a moment to tell us what you think."
          />
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
