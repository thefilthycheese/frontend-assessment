import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Newsletter from './Newsletter';
import Achievement from './Achievement';

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
      <section className="products-container">
        <h2 className="products-title">Our Premium Collection</h2>
        <div className="product-boxes">
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
        </div>
        <div div className="button-container">
          <button className="product-button">Find Out More</button>
        </div>
      </section>
      <section className="products-container">
        <h2 className="products-title">Our Premium Collection</h2>
        <div className="product-boxes">
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
          <div className="product-box">
            <div className="box-content">
              <h3 className="product-title">Tropical Suit</h3>
            </div>
          </div>
        </div>
        <div div className="button-container">
          <button className="product-button">Find Out More</button>
        </div>
      </section>
      <section className="about-container">
        <div className="about-image">
          <img src="path_to_image" alt="Large Image" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Large Title</h2>
          <p className="about-description">Description paragraph goes here...</p>
          <a className="about-more" href="">Read Full Story</a>
        </div>
      </section>
      <Achievement/>
      <section className="feedback-container">
        <div className="feedback-item">
          <div className="feedback-rectangle">
            <div className="feedback-square"></div>
            <div className="feedback-triangle"></div>
            <div className="feed-container">
              <h2 className="feedback-title">Good Seller!</h2>
              <p className="feedback-text">I am very happy with the services provided, it is very helpful, starting
              from the insight that the company gave from the start that I did not
              understand what it was so I got knowledge and made my website
              look better</p>
            </div>
          </div>
        </div>
        {/* Add more scroll items */}
        <div className="scroll-item">
          {/* ...content for the next scroll item... */}
        </div>
      </section>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
export default App;

