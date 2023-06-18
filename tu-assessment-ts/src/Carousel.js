import React from 'react';
import './Carousel.css';

const Carousel = () => {
  const cardData = [
    { id: 1, title: "Product 1", price: "$10" },
    { id: 2, title: "Product 2", price: "$20" },
    { id: 3, title: "Product 3", price: "$30" },
    { id: 4, title: "Product 4", price: "$40" },
    { id: 5, title: "Product 5", price: "$50" },
    { id: 6, title: "Product 6", price: "$60" },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <div className="carousel-container">
        <div className="carousel">
          {cardData.map((card, index) => (
            <div
              className={`card ${activeIndex === index ? 'active' : ''}`}
              key={card.id}
            >
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-price">{card.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {cardData.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;