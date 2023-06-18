import React from 'react';
import './App.css';
import Header from './Components/Header';
import Checkout from './Components/Checkout';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import Top from './Components/Top';

const Cart = () => {
  return (
    <div className='Cart'>
        <Header/>
        <Checkout/>
        <Top/>
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default Cart;
