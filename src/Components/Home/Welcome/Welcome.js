import React from 'react';
import image from '../../../images/Group 114.png';
import img1 from '../../../images/Group 207.png';
import img2 from '../../../images/Group 205.png';
import './Welcome.css';
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="div">
          <img src={image} alt="" />
          <h1>Welcome to nature</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ullam atque beatae ipsum nam voluptatem iste, in architecto adipisci quibusdam?</p>
      </div>
      <div className="boxes">
     <div className="box">
     <img src={img1} alt="" />
     </div>
     <div className="box">
     <img src={img2} alt="" />
     </div>
     <div className="box">
     <img src={img1} alt="" />
     </div>
     <div className="box">
     <img src={img1} alt="" />
     </div>
      </div>
    </div>
  );
}

export default Welcome;
