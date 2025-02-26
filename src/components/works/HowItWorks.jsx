import React from "react";
import "./HowItWorks.css"; // Importing styles

const StepCards = () => {
  return (
    <div className="step-card-container">
      {/* Title Section */}
      <h2 className="title-h">
        Make <span>hotel growth</span> effortless
      </h2>
      <p className="subtitle">
        Your all-in-one hotel growth platform designed to help you maximize revenue, optimize occupancy, and stay ahead of market trends.
      </p>

      {/* Steps Section */}
      <div className="steps">
        {/* Step 1 */}
        <div className="step-wrapper">
          <div className="step-card step-1">
            <h3>Strategize </h3>
            <p>Assess market trends, guest behavior, and historical data to uncover new opportunities.</p>
          </div>
          <div className="arrow">➜</div>
        </div>

        {/* Step 2 */}
        <div className="step-wrapper">
          <div className="step-card step-2">
            <h3>Optimize </h3>
            <p>Implement dynamic pricing and varied revenue management strategies to optimize revenue.</p>
          </div>
          <div className="arrow">➜</div>
        </div>

        {/* Step 3 */}
        <div className="step-wrapper">
          <div className="step-card step-3">
            <h3>Scale </h3>
            <p>Continuously monitor performance, refine strategies, and outperform competitors to maximize growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCards;
