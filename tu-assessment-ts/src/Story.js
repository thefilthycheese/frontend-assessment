import React from 'react';
import './App.css';

const Story = () => {
  return (
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
  );
};

export default Story;
