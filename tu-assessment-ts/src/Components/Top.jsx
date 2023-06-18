import React from 'react';
import './Components.css';

const Top = () => {
  const cardData = [
    { id: 1, title: "Product 1", price: "$10" },
    { id: 2, title: "Product 2", price: "$20" },
    { id: 3, title: "Product 3", price: "$30" },
    { id: 4, title: "Product 4", price: "$40" },
    { id: 5, title: "Product 5", price: "$50" },
    { id: 6, title: "Product 6", price: "$60" },
  ];
  return (
    <section className="products-container">
        <h2 className="products-title">Top Items</h2>
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
        </div>
    </section>
  );
};

export default Top;
