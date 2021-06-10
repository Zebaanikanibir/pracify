import React from 'react'
import img1 from '../../../images/Group 220.png';
import img2 from '../../../images/Group 195.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <h2>Healthy Life With</h2>
                <h1>Nature Organic</h1>
                <h3>Vegetables are the edible part of the plant</h3>
                <h3>that is use cooking and can be eaten now</h3>
                <button className="header-left-button">
                    Explore Now
                </button>
            </div>
            <div className="header-right">
                <div className="img-1">
                    <img src={img1} alt="" />
                </div>
                <div className="img-2">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
