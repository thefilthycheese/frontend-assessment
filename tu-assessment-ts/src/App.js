import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Newsletter from './Newsletter';
import Achievement from './Achievement';
import Premium from './Premium';
import Feedback from './Feedback';
import Story from './Story';
import Top from './Top';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <div className="b1container">
          <div className="content">
              <h2 className="bold-text">Your Premium Sound, Unplugged!</h2>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </section>
      <Premium/>
      <Top/>
      <Story/>
      <Achievement/>
      <Feedback/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
export default App;

