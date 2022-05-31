import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="heading">ZOOZLE</h3>
      <div className="links">
        <div className="location">
          <div className="loc">
            <div className="loc-icon">📍</div>
            <div className="loc-desc">
              <div>ZOOZLE TECH PRIVATE LIMITED</div>
              #30/1, Leemans Complex, 4th Floor Cunningham Road, Bangalore
              560052, Karnataka
            </div>
          </div>
          <div className="email">✉ letstalk@zoozle.in</div>
          <div className="number">✆ +91 8045684305</div>
        </div>
        <div className="upper">
          <div className="for-you">
            <div className="for-heading">FOR YOU</div>
            <div className="for-content">FAQ</div>
            <div className="for-content">Terms & Conditions</div>
            <div className="for-content">Privacy Policy</div>
            <div className="for-content">Product</div>
            <div className="for-content">Discover</div>
            <div className="for-content">Broadcasting Deals</div>
          </div>
          <div className="social">
            <div className="social-heading">SOCIAL LINKS</div>
            <div className="icons">
              <img src="https://zoozle.in/static/svg/logos/google_play.svg" />
              <img src="https://zoozle.in/static/svg/logos/appstorebutton.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-desc">
        © ZOOZLE TECH PRIVATE LIMITED 2022. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
