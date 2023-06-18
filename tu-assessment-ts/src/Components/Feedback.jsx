import React from 'react';
import './Components.css';

const Feedback = () => {
  return (
    <section className="feedback-container">
        <div className="feedback-item">
          <div className="feedback-rectangle">
            <div className="feedback-square"></div>
            <div className="feedback-triangle"></div>
            <div className="feed-container">
              <h2 className="feedback-title">Good Seller!</h2>
              <p className="feedback-text">I am very happy with the services provided, it is very helpful, starting
              from the insight that the company gave from the start that I did not
              understand what it was so I got knowledge and made my website
              look better</p>
            </div>
          </div>
        </div>
        {/* Add more scroll items */}
        <div className="scroll-item">
          {/* ...content for the next scroll item... */}
        </div>
      </section>
  );
};

export default Feedback;
