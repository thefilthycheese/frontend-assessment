import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
        <div className="logo-container">
          <span className="logo">Dealerz.</span>
        </div>
        <nav className="toolbar">
          <ul className="tabs">
            <li>
              <a to="/Shop">Shop</a>
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
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </nav>
      </header>
  );
};

export default Header;
