import React from 'react';
import './Checkout.css';
import { Breadcrumbs, Link } from '@mui/material';

const Checkout = () => {

  return (
    <div className="checkout-container">
        <div className="product-container">
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
            <p className="summary-text">Subtotal</p>
            <p className="summary-text">Shipping</p>
            <p className="summary-text">Total</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </aside>
      </div>
  );
};

export default Checkout;
