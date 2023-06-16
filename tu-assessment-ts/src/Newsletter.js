import React from 'react';
import './App.css';

const Newsletter = () => {
  return (
    <section className="newsletter-container">
        <div className="newsletter-rectangle">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Join Our News Letters</h2>
            <p className="newsletter-text">Leverage agile frameworks to provide a robust synopsis for high 
            level overviews. Iterative approaches to corporate strategy foster </p>
            <div className="newsletter-mailput"></div>
              <input type="email" placeholder="Insert your mail here"></input>
              <button className="newsletter-button">Send</button>
          </div>
        </div>
    </section>
  );
};

export default Newsletter;
