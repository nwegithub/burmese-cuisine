import React from 'react';
import '../../Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="modal">
        <div className="modal-header">
          <h2>We value your opinion.</h2>
        </div>
        <div className="modal-body">
          <p>How would you rate your overall experience?</p>
          {/* <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">&#9733;</span>
            ))}
          </div> */}
          <textarea placeholder="Kindly take a moment to tell us what you think." />
        </div>
        <div className="modal-footer">
          <button className="feedback-button">Share my feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
