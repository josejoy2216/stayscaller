import React from "react";
import "./Footer.css";
import footerimg from "./assets/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Section - Contact Info */}
          <div className="footer-left">
            <h5 className="footer-heading">Let's Connect with Stay Scaler</h5>
            <p className="footer-text">
              Want to enhance your hotel’s bookings and brand presence? Share your details, and we’ll offer personalized solutions.
            </p>
            <img className="footer-img" src={footerimg} alt="Stay Scaler" />
          </div>

          {/* Right Section - Contact Form */}
          <div className="footer-right">
            <p className="footer-contact-text">Have any questions? Reach out to us!</p>
            
            {/* Social Icons */}
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-whatsapp"></i></a>
            </div>
            <br />
            {/* Contact Form */}
            <form className="contact-form">
              <input type="text" className="form-input" placeholder="Your Name" required />
              <input type="tel" className="form-input" placeholder="Phone Number" required />
              <input type="email" className="form-input" placeholder="Email Address" required />
              <textarea className="form-input textarea" rows="3" placeholder="Message" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Stay Scaler. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
