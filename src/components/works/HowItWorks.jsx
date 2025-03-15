import React from "react";
import "./HowItWorks.css"; // Importing the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Strategize from "./assets/Strategize.png";
import Scale from "./assets/Scale.png";
import Optimize from "./assets/Optimize.png";

const WhyChooseUs = () => {
  return (
    <div id="what-we-do" className="why-choose-section">
      <h2 className="text-center">
        Make <span>hotel growth</span> effortless
      </h2>
      <p className="text-center description">
        We blend advanced analytics with personalized strategies, ensuring your
        hotel outperforms the competition and drives sustainable revenue growth.
      </p>

      {/* Desktop View */}
      <div className="container d-none d-md-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <div className="feature-box">
              <img src={Strategize} alt="Strategize" />
              <h3>Strategize</h3>
              <p>
                Assess market trends, guest behavior, and historical data to uncover new opportunities.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <img src={Optimize} alt="Optimize" />
              <h3>Optimize</h3>
              <p>
                Implement dynamic pricing and varied revenue management strategies to optimize revenue.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <img src={Scale} alt="Scale" />
              <h3>Scale</h3>
              <p>
                Continuously monitor performance, refine strategies, and outperform competitors to maximize growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View with Horizontal Scroll */}
      <div className="mobile-scroll d-md-none">
        <div className="scroll-container">
          <div className="feature-box">
            <img src={Strategize} alt="Strategize" />
            <h3>Strategize</h3>
            <p>
              Assess market trends, guest behavior, and historical data to uncover new opportunities.
            </p>
          </div>
          <div className="feature-box">
            <img src={Optimize} alt="Optimize" />
            <h3>Optimize</h3>
            <p>
              Implement dynamic pricing and varied revenue management strategies to optimize revenue.
            </p>
          </div>
          <div className="feature-box">
            <img src={Scale} alt="Scale" />
            <h3>Scale</h3>
            <p>
              Continuously monitor performance, refine strategies, and outperform competitors to maximize growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
