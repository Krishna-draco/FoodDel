import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container" id="Contact-us">
      <div className="footer-inner-container">
        <div className="inner-left">
          <img src={assets.logo} className="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            deserunt excepturi unde magni ut architecto quis officiis ea
            laboriosam alias!
          </p>
          <div className="links">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="inner-mid">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="inner-right">
          <h4>Get in Touch</h4>
          <p>+91 1234567890</p>
          <p>krish@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="footer-lower-container">
        <p>Compyright 2025 @Tomato.com | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
