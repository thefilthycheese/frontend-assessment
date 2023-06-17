import React from 'react';
import './App.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
        <div className="checkout-info">
          <h2 className="checkout-title">My Cart</h2>
          <ul className="product-list">
            <li className="product-item">
              <div className="product-info">
                <h3 className="product-name">Product 1</h3>
                <p className="product-size">Size: M</p>
                <div className="quantity-selector">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
              <div className="product-section"></div>
            </li>
          </ul>
        </div>
        <aside className="checkout-aside">
          <div className="coupon-section">
            <h3 className="coupon-title">Have a Coupon?</h3>
            <div className="coupon-input">
              <input type="text" placeholder="Input your email here" />
              <button className="product-button">Apply</button>
            </div>
          </div>
          <div className="order-summary">
            <h3 className="summary-title">Cart Totals</h3>
            <p className="summary-text">Line 1</p>
            <p className="summary-text">Line 2</p>
            <p className="summary-text">Line 3</p>
            <p className="summary-text">Line 4</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </aside>
      </div>
  );
};

export default Checkout;
