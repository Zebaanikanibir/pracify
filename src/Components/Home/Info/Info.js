import React from 'react';
import image1 from '../../../images/woman-in-brown-jacket-and-black-shirt-3484683.png';
import image2 from '../../../images/Group 86.png';
import image from '../../../images/Group 134.png';
const Info = () => {
  return (
    <div className="info">
      <div className="subscribe-right">
      <img src={image2} alt="" /><br />
      <img className="round" src={image1} alt="" />
      <h1>Jhan Doe</h1>
      <p>Thank you for all amazing produce And products you deliever each week.You make my life so easy and bring goodness into our family eating.I've have been roasting a lot of brussel  sprouts and</p>
      </div>
      <div className="subscribe-left">
      <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Info;
