import React from 'react'
import './Footer.css';
import img1 from '../../../images/Group 225.png';
import img2 from '../../../images/Group 99.png';
import img3 from '../../../images/Group 100.png';
import img4 from '../../../images/Group 105.png';
const Footer = () => {
    return (
        <div className="footer">


            <div className="footer-boxes">
                <div className="footer-box">
                    <img src={img1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto rerum quo porro recusandae eum error, temporibus omnis? Obcaecati, blanditiis.</p>
                    <p>Copyright 2020 Nature</p>
                </div>
                <div className="footer-box">
                    <h4>Information</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="footer-box">
                    <ul>
                        <li>About us</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h4>Follow Us</h4>
                    <div className="img">
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
