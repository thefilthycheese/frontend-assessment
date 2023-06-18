import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Newsletter from './Components/Newsletter';
import Achievement from './Components/Achievement';
import Premium from './Components/Premium';
import Feedback from './Components/Feedback';
import Story from './Components/Story';
import Top from './Components/Top';
import Carousel from './Carousel';
import Articles from './Components/Articles';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <div className="b1container">
          <div className="content">
              <h2 className="bold-text">Home Shopping, Your Choice!</h2>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
              
          </div>
          <button className="banner-button">Find Out More</button>
        </div>
      </section>
      <Premium/>
      <Top/>
      <Story/>
      <Achievement/>
      <Feedback/>
      <Articles/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
export default App;

