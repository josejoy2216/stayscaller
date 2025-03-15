import React, { useState } from "react";
import "./PartnerSection.css"; 
import analytics from "./assets/icons/analytics.png";
import dashboard from "./assets/icons/dashboard.png";
import money from "./assets/icons/money.png";
import radar from "./assets/icons/radar.png";
import rest from "./assets/icons/rest.png";
import trophy from "./assets/icons/trophy.png";

const PartnerSection = () => {
  const features = [
    { icon: analytics, text: "Data Driven Rate Optimization" },
    { icon: dashboard, text: "Detailed Performance Report" },
    { icon: money, text: "Maximize RevPAR" },
    { icon: radar, text: "Competition Analysis" },
    { icon: rest, text: " Occupancy Growth" },
    { icon: trophy, text: "Proven ROI" },
  ];

  return (
    <div id="why-choose" className="partner-section">
      <br />
      <h2 className="title">Why choose us?</h2>
      <div className="icon-container">
        {features.map((item, index) => (
          <div key={index} className="icon-box">
            <div className="icon-circle">
              <img src={item.icon} alt={item.text} className="icon-img" />
              <span className="icon-text">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
