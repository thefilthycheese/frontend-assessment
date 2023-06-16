import React from 'react';
import './App.css';
import img0 from './images/Our Achievements/Combined Shape.svg'
import img1 from './images/Our Achievements/Combined Shape-1.svg'
import img2 from './images/Our Achievements/Combined Shape-2.svg'
import img3 from './images/Our Achievements/Combined Shape-3.svg'
import img4 from './images/Our Achievements/Combined Shape-4.svg'
import img5 from './images/Our Achievements/Combined Shape-5.svg'

const Achievement = () => {
  return (
    <section className="our-container">
        <h2 className="our-title">Our Achievements</h2>
        <div className="our-gallery">
          <img src={img0} alt="image 1"/>
          <img src={img1} alt="Image 2" />
          <img src={img2} alt="Image 3" />
          <img src={img3} alt="Image 4" />
          <img src={img4} alt="Image 5" />
          <img src={img5} alt="Image 6" />
        </div>
      </section>
  );
};

export default Achievement;
