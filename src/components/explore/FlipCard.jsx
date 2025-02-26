import React from "react";
import "./FlipCard.css";

const FlipCard = () => {
  const services = [
    {
      title: "Online Reputation Management",
      description:
        "Streamline your hotel’s revenue with professional reputation management...",
      icon: "✔️",
    },
    {
      title: "Global Distribution System",
      description:
        "Reinforce your hotel’s digital foundation with GDS connectivity...",
      icon: "🌍",
    },
    {
      title: "Audit & Training",
      description:
        "Amplify booking with real-time availability updates and seamless connectivity...",
      icon: "♟️",
    },
    {
      title: "Website Development",
      description:
        "Enhance your hotel’s online presence with expert website development services...",
      icon: "🌐",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost bookings and brand visibility with digital marketing for hotels...",
      icon: "📢",
    },
    // {
    //   title: "SEO Optimization",
    //   description:
    //     "Improve search rankings and drive organic traffic with SEO services...",
    //   icon: "🔍",
    // },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
            <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
