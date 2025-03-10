import React, { useState } from "react";
import "./Footer.css";
import footerimg from "./assets/footer.png";

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "9014c775-b760-49d7-bfe2-4d9bfe13e9a0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

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
            <form className="contact-form" onSubmit={onSubmit}>
              <input type="text" name="name" className="form-input" placeholder="Your Name" required />
              <input type="tel" name="phone" className="form-input" placeholder="Phone Number" required />
              <input type="email" name="email" className="form-input" placeholder="Email Address" required />
              <textarea name="message" className="form-input textarea" rows="3" placeholder="Message" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            <div className="submission-result">{result}</div>
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
