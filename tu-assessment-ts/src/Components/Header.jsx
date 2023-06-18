import React from 'react';
import './Components.css';
import imgc from './images/header images/phone.svg';
import imgs from './images/header images/truck.svg';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <div className="h1-container">
        <div className="logo-container">
            <span className="logo">Dealerz.</span>
        </div>
        <div className="sc-container">
          <img className="imgc" src={imgc} alt="icon"/>
          <span className="header-call">Call Center</span>
          <img className="imgs" src={imgs} alt="icon"/>
          <span className="header-ship">Shipping & Returns</span>
        </div>
      </div>
          
          
        <nav className="toolbar">
          <ul className="tabs">
            <li>
              <a href="/Shop">Shop</a>
            </li>
            <li>
              <a href="/promo">Promo</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search What you need" />
            <button type="submit" className="search-button">
              <srcbtn className="search-icon" />
            </button>
          </div>
          <ul className="tabs2">
            <li>
              <a href="/Shop">wishlist</a>
            </li>
            <li>
              <a href="/Shop">cart</a>
            </li>
            <li>
              <a href="/Shop">profile</a>
            </li>
            <li>
              <a href="/Shop">alerts</a>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
