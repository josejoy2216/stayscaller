import React from "react";
// import { DollarSign, HeartPulse, TrendingUp, Settings, User, AlertTriangle } from "lucide-react";
import "./PartnerSection.css"; // Import the CSS file
import analytics from "./assets/icons/analytics.png";
import dashboard from "./assets/icons/dashboard.png";
import money from "./assets/icons/money.png";
import radar from "./assets/icons/radar.png";
import rest from "./assets/icons/rest.png";
import trophy from "./assets/icons/trophy.png";


const PartnerSection = () => {
  const features = [
    { icon: <div className="icon-circle"><img src={analytics} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={dashboard} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={money} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={radar} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={rest} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={trophy} alt="Financial Growth" /></div>, text: "Financial Growth" },
  ];
  

  return (
    <div className="partner-section">
      <br />
      <h2 className="title">Why choose us?</h2>
      <div className="icon-container">
        {features.map((item, index) => (
          <div key={index} className="icon-box">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
