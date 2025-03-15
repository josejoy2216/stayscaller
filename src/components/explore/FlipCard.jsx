import React from "react";
import { useNavigate } from "react-router-dom";
import "./FlipCard.css";
import revenuemanagement from "./img/Revenue-Management.png";
import socialmediamarketing from "./img/social-media.png";
import reputationmanagement from "./img/Reputation-Management.png";
import ppc from "./img/PPC.png";
import contentphotography from "./img/Reputation-Management.png";

const FlipCard = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Revenue Management",
      description:
        "Drive sustainable growth and maximize revenue with intelligent, analytics-backed strategies tailored to your property.",
      icon: revenuemanagement,
      button: "/service#revenue-management",
    },
    {
      title: "Social Media Marketing",
      description:
        "Maximize your hotel’s reach with platform-specific strategies designed for Instagram, LinkedIn, Facebook, and more",
      icon: socialmediamarketing,
      button: "/service#social-media-marketing",
    },
    {
      title: "Reputation Management",
      description:
        "Take control of your hotel’s online presence with our comprehensive reputation management services.",
      icon: reputationmanagement,
      button: "/service#reputation-management",
    },
    {
      title: "PPC (Pay Per Click)",
      description:
        "Showcase your hotel’s official website and real-time rates directly in Google search results, appearing alongside major OTAs.",
      icon: ppc,
      button: "/service#ppc",
    },
    {
      title: "Content & Photography",
      description:
        "At Stay Scaler, we harness the power of engaging content and stunning photography to elevate your hotel’s online presence and drive revenue",
      icon: contentphotography,
      button: "/service#content-and-photography",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path.split("#")[0]); // Navigate to the main page first

    setTimeout(() => {
      const hash = path.split("#")[1];
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300); // Small delay to ensure navigation completes before scrolling
  };

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="title">{service.title}</h3>
              <p className="description">{service.description}</p>
              <button className="visit-button" onClick={() => handleNavigation(service.button)}>
                Know More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
