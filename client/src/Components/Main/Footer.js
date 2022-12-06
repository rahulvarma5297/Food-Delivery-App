import React from "react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Latest Updated Will be sent to: ${email}`);
    setEmail("");
  };
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer section" id="footer">
        <div className="box-container">
          <div className="box">
            <p>
              {/* Quotes on food */}
              <i className="fas fa-quote-left"></i> Food is symbolic of love
              when words are inadequate. <i className="fas fa-quote-right"></i>
            </p>
            <div className="share">
              <a href="https://www.facebook.com" className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer">
                {" "}
              </a>
              <a href="https://www.twitter.com/" className="fab fa-twitter" target="_blank" rel="noopener noreferrer">
                {" "}
              </a>
              <a href="https://www.instagram.com" className="fab fa-instagram" target="_blank"  rel="noopener noreferrer">
                {" "}
              </a>
              <a href="https://in.linkedin.com" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer">
                {" "}
              </a>
            </div>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home" className="links">
              <i className="fas fa-arrow-right"></i> home
            </a>
            <a href="#food" className="links">
              <i className="fas fa-arrow-right"></i> food
            </a>
            <a href="#gallery" className="links">
              <i className="fas fa-arrow-right"></i> gallery
            </a>
            <a href="#services" className="links">
              <i className="fas fa-arrow-right"></i> services
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <p>
              <i className="fas fa-map"></i> indian institute of information
              technology sricity, andra pradesh
            </p>
            <p>
              <i className="fas fa-phone"></i> +91-9265-123-456
            </p>
            <p>
              <i className="fas fa-envelope"></i> swiggy@gmail.com{" "}
            </p>
            <p>
              <i className="fas fa-clock"></i> 6:00am - 12:00pm
            </p>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form onSubmit = {handleSubmit}>
              <input
                type="email"
                value={email}
                placeholder="enter your email"
                onChange={(x) => setEmail(x.target.value)}
                className="email"
              />
              <input type="submit" value="subscribe" className="btn" />
            </form>
          </div>
        </div>
      </div>

      <div className="credit">
        Copyright © {currentYear} Created By <span>IIITS STUDENTS</span> | all
        rights reserved !!
      </div>
    </>
  );
};

export default Footer;
