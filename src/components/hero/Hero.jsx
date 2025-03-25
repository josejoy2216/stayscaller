import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import videoFile from "../hero/Transform_Your_Hotel_Revenue.mp4";

const ComponentName = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Section */}
          <div className="hero-left">
            <video
              id="hero-video"
              className="hero-video"
              src={videoFile} // Ensure the file is inside the public folder
              autoPlay
              muted
              loop
              playsInline
              controls
            ></video>
          </div>

          {/* Right Section */}
          <div className="hero-right">
            <h1 className="hero-title">Lead the Game. Grow with Us.</h1>
            <p className="hero-description">
              Stay Scaler empowers hotels with data-driven insights, cutting-edge technology, and deep industry expertise to maximize revenue.
              Our seasoned team is dedicated to transforming your business into a market leader. <strong> Let’s grow together! </strong>
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <button className="analysis-btn" onClick={() => navigate("/hotel-gap-analysis")}>
                Free Hotel GAP Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentName;
