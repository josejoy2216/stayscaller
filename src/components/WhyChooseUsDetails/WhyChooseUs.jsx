import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./WhyChooseUs.css";
import FAQ from "./FAQ";

import ContentPhotography from "../assets/img/1.jpg";
import PPC from "../assets/img/DirectBooking.jpg";
import ReputationManagement from "../assets/img/2.jpg";
import SocialMediaMarketing from "../assets/img/5.jpg";
import RevenueManagement from "../assets/img/3.jpg";
import PriceInsight from "../assets/img/PriceInsight.jpg";

const WhyChooseUs = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      id: "revenue-management",
      title: "Revenue Management",
      content: (
        <div className="content-container">
          <p className="full-width-text">
            Drive sustainable growth and maximize revenue with intelligent,
            analytics-backed strategies tailored to your property.
          </p>
          <div className="split-content">
            <div className="image-section">
              <img src={RevenueManagement} alt="Revenue Management" className="fixed-image" />
            </div>
            <div className="text-section">
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li><strong>Market Intelligence:</strong> Analyze competitors, demand trends, and booking patterns.</li>
                <li><strong>Accurate Forecasting:</strong> Predict trends to optimize pricing and inventory.</li>
                <li><strong>Strategic Insights:</strong> Identify opportunities and mitigate risks with precision.</li>
                <li><strong>CRO (Conversion Rate Optimization):</strong> Enhance your website to convert more visitors into guests.</li>
                <li><strong>E-Distribution:</strong> Expand your reach with seamless integration across OTA.</li>
                <li><strong>Sustainable Growth:</strong> Focus on long-term profitability, not short-term gains.</li>
              </ul>
            </div>
          </div>
          <p className="full-width-text">
          <br />
            <strong>
              Elevate your revenue performance with smarter, data-driven decisions and a holistic approach to growth.
            </strong>
          </p>
        </div>
      ),
    },
    {
      id: "ppc",
      title: "Increase Direct Bookings",
      content: (
        <div className="content-container">
          <p className="full-width-text">
            Drive Direct Customer Bookings with Google Booking Links. Showcase your 'Official Website' tag and real-time rates on Google, standing out next to OTAs. Attract more guests, highlight your best prices, and cut out high OTA commissions.
          </p>
          <div className="split-content">
            <div className="image-section">
              <img src={PPC} alt="PPC" className="fixed-image" />
            </div>
            <div className="text-section">
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li><strong>Increased Visibility:</strong> Drive higher conversion with the "Official Website" Tag & Appear in Google search results next to OTAs.</li>
                <li><strong>Competitive Edge:</strong> Display your best rates and offers.</li>
                <li><strong>Cost Efficiency:</strong> Save on high OTA commission fees.</li>
                <li><strong>Seamless Booking:</strong> Let travelers book directly from Google.</li>
              </ul>
            </div>
          </div>
          <p className="full-width-text">
            <br />
            <strong>
              Boost direct bookings and take control of your revenue with Google Booking Links.
            </strong>
          </p>
        </div>
      ),
    },
    {
      id: "PriceInsight",
      title: "Price Insight",
      content: (
        <div className="content-container">
          <p className="full-width-text">
          Outperform competitors with Price Insight. Track real-time market rates, optimize your pricing strategy, and unlock higher revenue with data-driven insights.
          </p>
          <div className="split-content">
            <div className="image-section">
              <img src={PriceInsight} alt="Price Insight" className="fixed-image" />
            </div>
            <div className="text-section">
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li><strong>Real-Time Rate Tracking:</strong> Monitor competitor pricing dynamically to stay competitive.</li>
                <li><strong>Data-Driven Decisions:</strong> Make informed pricing adjustments with accurate market analysis.</li>
                <li><strong>Boost Revenue:</strong> Optimize your rates to attract more bookings and increase profitability.</li>
                <li><strong>Demand Forecast:</strong> Track 90-day comp set demand trends to pinpoint peak and low periods, enabling smarter pricing decisions and maximizing revenue potential.</li>
              </ul>
            </div>
          </div>
          <p className="full-width-text">
            <br />
            <strong>
              Take control of your pricing strategy and unlock your property's full revenue potential with Price Insight.
            </strong>
          </p>
        </div>
      ),
    },   
    {
      id: "reputation-management",
      title: "Reputation Management",
      content: (
        <div className="content-container">
          <p className="full-width-text">
            Take control of your hotel’s online presence with our comprehensive reputation management services.
          </p>
          <div className="split-content">
            <div className="image-section">
              <img src={ReputationManagement} alt="Reputation Management" className="fixed-image" />
            </div>
            <div className="text-section">
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li><strong>Monitor & Analyze:</strong> Track reviews, mentions, and feedback in real-time.</li>
                <li><strong>Strategic Response:</strong> Address concerns professionally and highlight positive reviews.</li>
                <li><strong>Content Control:</strong> Shape your narrative with engaging, accurate content.</li>
                <li><strong>Continuous Improvement:</strong> Regular audits to maintain a strong, positive brand image.</li>
              </ul>
            </div>
          </div>
          <p className="full-width-text">
            <br />
            <strong>
              Build trust, enhance guest satisfaction, and strengthen your reputation effortlessly.
            </strong>
          </p>
        </div>
      ),
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      content: (
        <div className="content-container">
          <p className="full-width-text">
            Maximize your hotel’s reach with platform-specific strategies designed for Instagram, LinkedIn, Facebook, and more.
          </p>
          <div className="split-content">
            <div className="image-section">
              <img src={SocialMediaMarketing} alt="Social Media Marketing" className="fixed-image" />
            </div>
            <div className="text-section">
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li><strong>Innovative Content:</strong> Eye-catching visuals, reels, and ad creatives that captivate your audience.</li>
                <li><strong>Platform Expertise:</strong> Advanced tools for ad management, analytics, and performance tracking.</li>
                <li><strong>Authentic Engagement:</strong> Build trust through genuine conversations and meaningful interactions.</li>
                <li><strong>Trend Leadership:</strong> Stay ahead by leveraging viral moments and emerging trends.</li>
              </ul>
            </div>
          </div>
          <p className="full-width-text">
            <br />
            <strong>
              Transform your social media presence into a powerful booking channel and increase brand loyalty.
            </strong>
          </p>
        </div>
      ),
    },
    {
      id: "content-and-photography",
      title: "Content & Photography",
      content: (
        <div className="content-container">
          <p className="full-width-text">
            At Stay Scaler, we harness the power of engaging content and stunning photography to elevate your hotel’s online presence and drive revenue.
          </p>
          <div className="split-content">
            <div className="image-section">
              <img src={ContentPhotography} alt="Content & Photography" className="fixed-image" />
            </div>
            <div className="text-section">
              <h4>✅ What We Deliver:</h4>
              <ul>
                <li><strong>Professional Visuals:</strong> High-quality photography that showcases your property’s unique charm.</li>
                <li><strong>Compelling Storytelling:</strong> Content that connects with guests and highlights your offerings.</li>
                <li><strong>Visual Impact:</strong> Create a lasting impression with captivating imagery that stands out.</li>
                <li><strong>Brand Identity:</strong> Strengthen your image and set clear guest expectations.</li>
              </ul>
            </div>
          </div>
          <p className="full-width-text">
            <br />
            <strong>
              Transform your online presence, drive direct bookings, and maximize revenue with our tailored content and photography solutions.
            </strong>
          </p>
        </div>
      ),
    },
  ];
  

  useEffect(() => {
    // Scroll to the top on initial render or page navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const foundItem = menuItems.find((item) => item.id === sectionId);
      if (foundItem) {
        setSelectedItem(foundItem);
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Delay ensures navigation completes first
      }
    } else {
      setSelectedItem(menuItems[0]);
    }
  }, [location]); // Runs on location change
  

  return (
    
    <div className="why-choose-us-container mt-5">
      <div className="content-wrapper">
        <div className="split-layout">
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
          <div className="main-content">
            <h1>{selectedItem?.title}</h1>
            {selectedItem?.content}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section-wrapper">
        <FAQ />
      </div>





    </div>
  );
};

export default WhyChooseUs;
