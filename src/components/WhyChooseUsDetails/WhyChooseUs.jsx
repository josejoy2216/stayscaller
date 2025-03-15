import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./WhyChooseUs.css";

import ContentPhotography from "../assets/img/1.jpg";
import PPC from "../assets/img/7.jpg";
import ReputationManagement from "../assets/img/2.jpg";
import SocialMediaMarketing from "../assets/img/5.jpg";
import RevenueManagement from "../assets/img/3.jpg";



const WhyChooseUs = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      id: "revenue-management",
      title: "Revenue Management",
      content: (
        <div className="content-container">
          <div className="split-content">
            {/* Left Side - Image (40%) */}
            <div className="image-section">
              <img src={RevenueManagement} alt="Excellence in Service" />
            </div>

            {/* Right Side - Text Content (60%) */}
            <div className="text-section">
              {/* <h2>Revenue Management</h2> */}
              <p>
                Drive sustainable growth and maximize revenue with intelligent,
                analytics-backed strategies tailored to your property.
              </p>
              <h4>✅ What We Offer:</h4>
              <ul>
                <li>
                  <strong>Market Intelligence:</strong> Analyze competitors,
                  demand trends, and booking patterns.
                </li>
                <li>
                  <strong>Accurate Forecasting:</strong> Predict trends to
                  optimize pricing and inventory.
                </li>
                <li>
                  <strong>Strategic Insights:</strong> Identify opportunities
                  and mitigate risks with precision.
                </li>
                <li>
                  <strong>CRO (Conversion Rate Optimization):</strong> Enhance
                  your website to convert more visitors into guests.
                </li>
                <li>
                  <strong>E-Distribution:</strong> Expand your reach with
                  seamless integration across OTA.
                </li>
                <li>
                  <strong>Sustainable Growth:</strong> Focus on long-term
                  profitability, not short-term gains.
                </li>
              </ul>
              <p>
                Elevate your revenue performance with smarter, data-driven
                decisions and a holistic approach to growth.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      content: (
        <div className="content-container">
          <div className="split-content">
            {/* Left Side - Image (40%) */}
            <div className="image-section">
              <img src={SocialMediaMarketing} alt="Excellence in Service" />
            </div>

            {/* Right Side - Text Content (60%) */}
            <div className="text-section">
              {/* <h2>Revenue Management</h2> */}
              <p>
              Maximize your hotel’s reach with platform-specific strategies designed for Instagram, LinkedIn, Facebook, and more.
              </p>
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li>
                  <strong>Innovative Content:</strong> Eye-catching visuals, reels, and ad creatives that captivate your audience.
                </li>
                <li>
                  <strong>Platform Expertise:</strong> Advanced tools for ad management, analytics, and performance tracking.
                </li>
                <li>
                  <strong>Authentic Engagement:</strong> Build trust through genuine conversations and meaningful interactions.
                </li>
                <li>
                  <strong>Trend Leadership:</strong> Stay ahead by leveraging viral moments and emerging trends.
                </li>
              </ul>
              <p>
              Transform your social media presence into a powerful booking channel and increase brand loyalty.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "reputation-management",
      title: "Reputation Management",
      content: (
        <div className="content-container">
          <div className="split-content">
            {/* Left Side - Image (40%) */}
            <div className="image-section">
              <img src={ReputationManagement} alt="Excellence in Service" />
            </div>

            {/* Right Side - Text Content (60%) */}
            <div className="text-section">
              <p>
              Take control of your hotel’s online presence with our comprehensive reputation management services.
              </p>
              <h4>✅ What We Offer:</h4>
              <ul>
                <li>
                  <strong>Monitor & Analyze:</strong> Track reviews, mentions, and feedback in real-time.
                </li>
                <li>
                  <strong>Strategic Response:</strong> Address concerns professionally and highlight positive reviews.
                </li>
                <li>
                  <strong>Content Control:</strong> Shape your narrative with engaging, accurate content.
                </li>
                <li>
                  <strong>Continuous Improvement:</strong> Regular audits to maintain a strong, positive brand image.
                </li>
              </ul>
              <p>
              Build trust, enhance guest satisfaction, and strengthen your reputation effortlessly.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ppc",
      title: "PPC (Pay Per Click)",
      content: (
        <div className="content-container">
          <div className="split-content">
            {/* Left Side - Image (40%) */}
            <div className="image-section">
              <img src={PPC} alt="Excellence in Service" />
            </div>

            {/* Right Side - Text Content (60%) */}
            <div className="text-section">
              <p>
              Drive Direct Bookings with Google Booking Links Showcase your hotel’s official website and real-time rates directly in Google search results, 
              appearing alongside major OTAs. Attract more travelers, highlight your best pricing, and reduce commission fees—all while offering a seamless booking experience.
              </p>
              <h4>✅ Key Benefits:</h4>
              <ul>
                <li>
                  <strong>Increased Visibility:</strong> Appear in Google search results next to OTAs.
                </li>
                <li>
                  <strong>Competitive Edge:</strong> Display your best rates and offers.
                </li>
                <li>
                  <strong>Cost Efficiency:</strong> Save on high OTA commission fees.
                </li>
                <li>
                  <strong>Seamless Booking:</strong> Let traveller book directly from Google.
                </li>
              </ul>
              <p>
                Boost direct bookings and take control of your revenue with Google Booking Links.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "content-and-photography",
      title: "Content & Photography",
      content: (
        <div className="content-container">
          <div className="split-content">
            {/* Left Side - Image (40%) */}
            <div className="image-section">
              <img src={ContentPhotography} alt="Excellence in Service" />
            </div>

            {/* Right Side - Text Content (60%) */}
            <div className="text-section">
              <p>
              At Stay Scaler, we harness the power of engaging content and stunning photography to elevate your hotel’s online presence and drive revenue.
              </p>
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li>
                  <strong>Professional Visuals:</strong> High-quality photography that showcases your property’s unique charm.
                </li>
                <li>
                  <strong>Compelling Storytelling:</strong> Content that connects with guests and highlights your offerings.
                </li>
                <li>
                  <strong>Visual Impact:</strong> Create a lasting impression with captivating imagery that stands out.
                </li>
                <li>
                  <strong> Brand Identity:</strong> Strengthen your image and set clear guest expectations.
                </li>
              </ul>
              <p>
              Transform your online presence, drive direct bookings, and maximize revenue with our tailored content and photography solutions
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Remove #
      const foundItem = menuItems.find((item) => item.id === sectionId);
      if (foundItem) {
        setSelectedItem(foundItem);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setSelectedItem(menuItems[0]); // Default to the first item
    }
  }, [location]);

  return (
    <div className="why-choose-us-container mt-5">
      <div className="content-wrapper">
        <div className="split-layout">
          {/* Sidebar */}
          <div className="sidebar">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sidebar-button ${selectedItem?.id === item.id ? "active" : ""}`}
                onClick={() => setSelectedItem(item)}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Main Content */}
          <div className="main-content">
            {selectedItem?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
