// import React, { useState } from 'react';
// import axios from 'axios';
// import '../../Feedback.css';
// import { useAuth } from '../../Auth/AuthContext';

// const Feedback = () => {
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const { user } = useAuth();
//   const userId = user && JSON.parse(user)._id

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/feedback/createFeedback', {
//         comment,
//         user: userId
//       });

//       if (response.status === 201) {
//         setSuccess('Feedback submitted successfully!');
//         setComment('');
//         alert('Thank you for your review')

//       }
//     } catch (error) {
//       setError('Failed to submit feedback');
//     }
//   };

//   console.log("user",userId)

//   return (
//     <div className="feedback-container bg-custom-gradient h-screen">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>We value your opinion.</h2>
//         </div>
//         <div className="modal-body">
//           <p>How would you rate your overall experience?</p>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Kindly take a moment to tell us what you think."
//           />
//         </div>
//         <div className="modal-footer">
//           <button className="feedback-button" onClick={handleSubmit}>Share my feedback</button>
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}
//       </div>
//     </div>
//   );
// };

// export default Feedback;
import React, { useState } from 'react';
import '../../Feedback.css';// Import the CSS file

const FeedBack = () => {
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ experience, description, feedbackType });
    // Handle form submission logic here
  };

  return (
    <div className="feedback-form-container min-h-screen bg-custom-gradient" style={{minHeight:"50vh"}}>
      <div className="feedback-form">
        <h2>Send us your feedback!</h2>
        <p>Do you have a suggestion? Let us know in the field below.</p>
        <form onSubmit={handleSubmit}>
          <div className="experience">
            <label>How was your experience?</label>
            <div className="experience-options">
              <p type="button" className={`experience-btn ${experience === 'good' ? 'selected' : ''}`}  style={{fontSize:"50px"}}>😊</p>
              <p type="button" className={`experience-btn ${experience === 'neutral' ? 'selected' : ''}`}  style={{fontSize:"50px",marginLeft:"15px",marginRight:"15px"}}>😐</p>
              <p type="button" className={`experience-btn ${experience === 'bad' ? 'selected' : ''}`}  style={{fontSize:"50px"}}>😞</p>
            </div>
          </div>
          <div className="description">
            <textarea placeholder="Describe your experience here..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          {/* <div className="feedback-type">
            <label>
              <input type="radio" value="bug" checked={feedbackType === 'bug'} onChange={(e) => setFeedbackType(e.target.value)} />
              Bug
            </label>
            <label>
              <input type="radio" value="suggestion" checked={feedbackType === 'suggestion'} onChange={(e) => setFeedbackType(e.target.value)} />
              Suggestion
            </label>
            <label>
              <input type="radio" value="others" checked={feedbackType === 'others'} onChange={(e) => setFeedbackType(e.target.value)} />
              Others
            </label>
          </div> */}
          <button type="submit" className="submit-btn">Send Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;