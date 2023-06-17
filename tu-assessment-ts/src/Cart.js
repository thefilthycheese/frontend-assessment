import React from 'react';
import './App.css';
import Header from './Header.js';
import Checkout from './Checkout';
import Newsletter from './Newsletter';
import Footer from './Footer';

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
