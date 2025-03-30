import React from "react";
import { useNavigate } from "react-router-dom";
import "./FlipCard.css";
import revenuemanagement from "./img/Revenue-Management.png";
import socialmediamarketing from "./img/social-media.png";
import reputationmanagement from "./img/Reputation-Management.png";
import directbooking from "./img/Direct-Booking.png";
import contentphotography from "./img/Content-photo.png";
import priceinsight from "./img/Price-Insight.png";

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
      title: "Increase Direct Bookings",
      description:
        "Showcase your hotel’s official website and real-time rates directly in Google search results, appearing alongside major OTAs.",
      icon: directbooking,
      button: "/service#ppc",
    },
    {
      title: "Price Insight",
      description:
        "Outperform competitors with Price Insight. Track real-time market rates, optimize your pricing strategy, and unlock higher revenue with data-driven insights.",
      icon: priceinsight,
      button: "/service#PriceInsight",
    },
    {
      title: "Reputation Management",
      description:
        "Take control of your hotel’s online presence with our comprehensive reputation management services.",
      icon: reputationmanagement,
      button: "/service#reputation-management",
    },
    {
      title: "Social Media Marketing",
      description:
        "Maximize your hotel’s reach with platform-specific strategies designed for Instagram, LinkedIn, Facebook, and more",
      icon: socialmediamarketing,
      button: "/service#social-media-marketing",
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
    navigate(path); // Navigate directly to the full path, including the hash
  
    setTimeout(() => {
      const hash = path.split("#")[1];
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if no hash
      }
    }, 300); // Delay to ensure navigation completes
  };
  
  
  

  return (
    <div id="services-container" className="services-container">
      <h2 className="title">What we do Best</h2>
      <div className="container">
        <div className="row"> {/* Bootstrap row to ensure proper layout */}
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4"> 
              <div className="flip-card">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
