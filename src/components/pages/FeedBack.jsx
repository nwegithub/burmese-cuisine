import React, { useState } from 'react';
import axios from 'axios';
import '../../Feedback.css'; // Import the CSS file
import { useAuth } from '../../Auth/AuthContext';

const FeedBack = () => {
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState(''); // Assuming comment is supposed to be description
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { user,isMya } = useAuth();
  

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
      }
    } catch (error) {
      setError('Failed to submit feedback');
    }
  };
  
  console.log("userId:", userId);
  return (
    <div className="feedback-form-container min-h-screen bg-custom-gradient" style={{minHeight: "50vh"}}>
      <div className="feedback-form">
        <h2>
          {isMya ? "သင်၏အကြံပြုချက်ကိုပေးရန်!" : "Send us your feedback!"}
        </h2>
        <p>{isMya?"အကြံပြုချက်ရှိပါသလား?":"Do you have a suggestion? "}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="experience">
          <label>{isMya?"ရှိခဲ့လျှင်အောက်မှာရေးပေးပါ":" Let us know in the field below."}</label>
         
            {/* <label>How was your experience?</label> */}
            <div className="experience-options">
              <p type="button" className={`experience-btn ${experience === 'good' ? 'selected' : ''}`} onClick={() => setExperience('good')} style={{fontSize: "50px"}}>😊</p>
              <p type="button" className={`experience-btn ${experience === 'neutral' ? 'selected' : ''}`} onClick={() => setExperience('neutral')} style={{fontSize: "50px", marginLeft: "15px", marginRight: "15px"}}>😐</p>
              <p type="button" className={`experience-btn ${experience === 'bad' ? 'selected' : ''}`} onClick={() => setExperience('bad')} style={{fontSize: "50px"}}>😞</p>
            </div>
          </div>
          <div className="description">
            <textarea placeholder={isMya?"ဤနေရာတွင့်သင့်အကြံပြုချက်ကိုရေးပေးပါ….":" Describe your experience here..."} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button type="submit" className="submit-btn"> {isMya?"ပေးပို့ရန်":" Send Feedback"}
          </button>
        </form>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default FeedBack;
