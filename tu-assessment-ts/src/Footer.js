import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-square"></div>
          <div className="footer-text">
            <h2 className="footer-title">Dealerz.</h2>
            <p className="footer-text">Privacy Policy</p>
            <p className="footer-text">Terms and Condition</p>
          </div>
          <div className="footer-socials">
            <img src="" alt="yt"/>
            <img src="" alt="fb"/>
            <img src="" alt="tw"/>
            <img src="" alt="ig"/>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} TanahAir Studio. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
