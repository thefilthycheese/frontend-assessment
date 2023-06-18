import React from 'react';
import './Components.css';

const Newsletter = () => {
  return (
    <section className="newsletter-container">
        <div className="newsletter-rectangle">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Join Our News Letters</h2>
            <p className="newsletter-text">Leverage agile frameworks to provide a robust synopsis for high 
            level overviews. Iterative approaches to corporate strategy foster </p>
            <div className="search-bar">
              <input type="text" className="search-input" placeholder="Insert your email here" />
              <button type="submit" className="search-button">
                <srcbtn className="search-icon" />
              </button>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Newsletter;
