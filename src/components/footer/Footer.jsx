import React from "react";
import "./Footer.css"; // Custom styles

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container py-5">
        <div className="row">
          {/* Discover Stay Scaler Section */}
          <div className="col-md-3">
            <h5 className="footer-heading">Discover Stay Scaler</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cancellation & Refund Policy</a></li>
            </ul>
          </div>

          {/* Our Offerings Section */}
          <div className="col-md-3">
            <h5 className="footer-heading">Our Offerings</h5>
            <ul className="list-unstyled">
              <li><a href="#">Revenue Management</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Reputation Marketing</a></li>
              <li><a href="#">Pay Per Click</a></li>
              <li><a href="#">Content & Photography</a></li>

            </ul>
          </div>

          {/* Company Section */}
          <div className="col-md-3">
            <h5 className="footer-heading">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Business Section */}
          <div className="col-md-3">
            <h5 className="footer-heading">Business</h5>
            <ul className="list-unstyled">
              <li><a href="#">Free Hotel Gap Analysis</a></li>
              <li><a href="#">Revenue Challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="footer-heading">Connect with Stay Scaler</h5>
            <p>Have a question? Get in touch with us!</p>

            <div className="social-icons mt-3">
              <a href="#" className="me-3 text-dark"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#" className="me-3 text-dark"><i className="bi bi-twitter fs-4"></i></a>
              <a href="#" className="me-3 text-dark"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#" className="me-3 text-dark"><i className="bi bi-whatsapp fs-4"></i></a>
            </div>
            <br />

          </div>

          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Phone Number" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="3" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-3 border-top">
        <small>© 2024 Stay Scaler. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
