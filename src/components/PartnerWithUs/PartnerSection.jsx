import React from "react";
import { DollarSign, HeartPulse, TrendingUp, Settings, User, AlertTriangle } from "lucide-react";
import "./PartnerSection.css"; // Import the CSS file
import bot from "./assets/bot.png";
import grow from "./assets/grow.png";
import mobile from "./assets/mobile.png";
import partner from "./assets/partner.png";
import settings from "./assets/settings.png";


const PartnerSection = () => {
  const features = [
    { icon: <div className="icon-circle"><img src={bot} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={grow} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={mobile} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={partner} alt="Financial Growth" /></div>, text: "Financial Growth" },
    { icon: <div className="icon-circle"><img src={settings} alt="Financial Growth" /></div>, text: "Financial Growth" },
  ];
  

  return (
    <div className="partner-section">
      <br />
      <h2 className="title">Partner With Us For Unmatched Results</h2>
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
