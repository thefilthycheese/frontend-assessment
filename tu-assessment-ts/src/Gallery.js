import React from 'react';
import './App.css';
import Header from './Components/Header';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import Premium from './Components/Premium';
import Feedback from './Components/Feedback';

const Gallery = () => {
  return (
    <div>
        <Header/>
        <Premium/>
        <Feedback/>
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default Gallery;
