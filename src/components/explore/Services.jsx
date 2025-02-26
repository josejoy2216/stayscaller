import React from "react";
import FlipCard from "./FlipCard";
import "./FlipCard.css";

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
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <FlipCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
