import React from 'react';
import './Components.css';
import img from './images/Footer/Container.svg'

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-image"></div>
          <div className="footer-text">
            <h2 className="footer-title">Dealerz.</h2>
            <p className="footer-text">Privacy Policy</p>
            <p className="footer-text">Terms and Condition</p>
          </div>
          <div className="footer-socials">
            <img src={img} alt="yt"/>
            <img src={img} alt="fb"/>
            <img src={img} alt="tw"/>
            <img src={img} alt="ig"/>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} TanahAir Studio. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
