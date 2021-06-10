import React from 'react'
import img1 from '../../../images/Group 39.png';
import img2 from '../../../images/Group 64.png';
import img3 from '../../../images/Group 55.png';
import './Proud.css';
const Proud = () => {
  return (
    <div className="proud">
      <div className="proud-info">
         
          <h1>Proudly Presented by</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ullam atque beatae ipsum nam voluptatem iste, in architecto adipisci quibusdam?</p>
      </div>
      <div className="proud-boxes">
     <div className="box">
     <img src={img1} alt="" />
     </div>
     <div className="box">
     <img src={img2} alt="" />
     </div>
     <div className="box">
     <img src={img3} alt="" />
     </div>
     <div className="box">
     <img src={img2} alt="" />
     </div>
     <div className="box">
     <img src={img1} alt="" />
     </div>
      </div>
    </div>
  )
}

export default Proud
