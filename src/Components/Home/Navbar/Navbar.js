import React from 'react';
import logo from '../../../images/Group 228.png'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
     <div className="left">
         <img style={{width:"20%"}} src={logo} alt="" />
     <h2>Organic</h2>
     </div>
     <div className="right">
         <ul className="right-1">
             <li className="item">Home</li>
             <li className="item">Products</li>
             <li className="item">Blog</li>
             <li className="item">About Us</li>
             <li className="item">contact</li>
         </ul>
     </div>
    </div>
  );
}

export default Navbar;
