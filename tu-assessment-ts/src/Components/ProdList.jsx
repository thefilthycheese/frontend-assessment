import React from 'react';
import './ProdList.css';
import filt from './images/prodlist/filter.svg';

const ProdList = () => {
    const products = [
        {
          id: 1,
          title: "Urbano Jacket",
          seller: "watchmenow",
          price: "$99",

        },
        {
          id: 2,
          title: "Urbano Jacket",
          seller: "watchmenow",
          price: "$99",
        },
        {
          id: 3,
          title: "Urbano Jacket",
          seller: "watchmenow",
          price: "$99",
        },
        {
          id: 4,
          title: "Urbano Jacket",
          seller: "watchmenow",
          price: "$99",
        },
      ];
 
  return (
    <div>
        <section>
        <div className="b1container">
          <div className="content">
              <h2 className="bold-text">Your Premium Sound, Unplugged!</h2>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </section>
        <div className="main-container">
            <aside className="aside-container">
            <div className="search-bar">
                <input type="text" placeholder="Search Products" />
            </div>
            <div className="price-filter">
                <h3>Price</h3>
                <div className="filter-button">
                <img src={filt} alt="Filter" />
                </div>
            </div>
            <div className="price-range">
                <h4>Range</h4>
                {/* ...price range content... */}
            </div>
            <div className="product-range">
                <h4>Product Categories</h4>
                {/* ...product range categories... */}
            </div>
            <div className="featured-product">
                <h4>Featured Product</h4>
                {/* ...featured products... */}
            </div>
            </aside>
            <section className="prodlist-container">
            <header className="App-header">
            </header>
            <div className="prodlist-container">
                <div className="article-header">
                <h2>Get Better Insight from Our Articles</h2>
                <span className="see-more">See More</span>
                </div>
                <div className="articles">
                {products.map((product) => (
                    <div className="article" key={product.id}>
                    <div className="article-content">
                        <p className="article-author">{product.author}</p>
                        <h3 className="article-title">{product.title}</h3>
                        <p className="article-text">{product.content}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>
        </div>
    </div>
  );
};

export default ProdList;
