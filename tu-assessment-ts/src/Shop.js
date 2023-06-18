import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import ProdList from './Components/ProdList';
const Shop = () => {
  return (
    <div className="Shop">
        <Header/>
        <ProdList/>
        <Newsletter/>
        <Footer/>
    </div>
    
  );
};

export default Shop;
