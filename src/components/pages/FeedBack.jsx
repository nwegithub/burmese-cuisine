import React, { useState } from 'react';
import axios from 'axios';
import '../../Feedback.css'; // Import the CSS file
import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const FeedBack = () => {
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState(''); // Assuming comment is supposed to be description
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()

  const { user, isMya } = useAuth();

  // Ensure user is parsed correctly
  let userId;
  try {
    userId = user && (typeof user === 'string' ? JSON.parse(user)._id : user._id);
  } catch (parseError) {
    console.error('Error parsing user:', parseError);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post('http://localhost:4000/feedback/createFeedback', {
        comment: description, // Assuming this is the actual feedback text
        user: userId,
      });

      if (response.status === 201) {
        setSuccess('Feedback submitted successfully!');
        setDescription(''); // Clear the description after submission
        alert('Thank you for your review');
        navigate('/Customer')
      }
    } catch (error) {
      setError('Failed to submit feedback');
    }
  };

  console.log("userId:", userId);
  return (
    <div className="feedback-form-container min-h-screen bg-custom-gradient" style={{ minHeight: "95vh", backgroundColor: '#f0f4f8' }}> 
      <div className="feedback-form" style={{ padding: '40px', maxWidth: '800px', margin: 'auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px yellow' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>
          {isMya ? "သင်၏အကြံပြုချက်ကိုပေးရန်!" : "Send us your feedback!"}
        </h2>
        <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          {isMya ? "အကြံပြုချက်ရှိပါသလား?" : "Do you have a suggestion?"}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="experience" style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1.5rem' }}>{isMya ? "ရှိခဲ့လျှင်အောက်မှာရေးပေးပါ" : "Let us know in the field below."}</label>
            <div className="experience-options" style={{ textAlign: 'center' }}>
              <p
                type="button"
                className={`experience-btn ${experience === 'good' ? 'selected' : ''}`}
                onClick={() => setExperience('good')}
                style={{ fontSize: '4rem', margin: '0 10px' }}
              >
                😊
              </p>
              <p
                type="button"
                className={`experience-btn ${experience === 'neutral' ? 'selected' : ''}`}
                onClick={() => setExperience('neutral')}
                style={{ fontSize: '4rem', margin: '0 10px' }}
              >
                😐
              </p>
              <p
                type="button"
                className={`experience-btn ${experience === 'bad' ? 'selected' : ''}`}
                onClick={() => setExperience('bad')}
                style={{ fontSize: '4rem', margin: '0 10px' }}
              >
                😞
              </p>
            </div>
          </div>
          <div className="description" style={{ marginBottom: '20px' }}>
            <textarea
              placeholder={isMya ? "ဤနေရာတွင့်သင့်အကြံပြုချက်ကိုရေးပေးပါ…." : "Describe your experience here..."}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                height: '150px',
                fontSize: '2rem',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                color: 'black' // Change this color to your preferred text color
              }}
            />
          </div>
          <button
            type="submit"
            className="submit-btn"
            style={{ backgroundColor: '#42eff5', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '2rem', cursor: 'pointer' }}
          >
            {isMya ? "ပေးပို့ရန်" : "Send Feedback"}
          </button>
        </form>
        {success && <p className="success-message" style={{ color: 'green', fontSize: '1.2rem', textAlign: 'center' }}>{success}</p>}
        {error && <p className="error-message" style={{ color: 'red', fontSize: '1.2rem', textAlign: 'center' }}>{error}</p>}
      </div>
    </div>
  );
};

export default FeedBack;
