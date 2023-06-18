import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Checkout from './Components/Checkout';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

const Cart = () => {
  return (
    <div>
        <Header/>
        <Checkout/>
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default Cart;
