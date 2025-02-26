import React from "react";
import { FaUser, FaBuilding, FaGlobe } from "react-icons/fa";

const StepProgress = ({ step }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {[
        { num: 1, label: "Profile", icon: <FaUser /> },
        { num: 2, label: "Business", icon: <FaBuilding /> },
        { num: 3, label: "Social", icon: <FaGlobe /> },
      ].map(({ num, label, icon }) => (
        <div key={num} className="text-center flex-grow-1">
          <div className={`step-icon ${step >= num ? "active" : ""}`}>{icon}</div>
          <p className={`mt-2 ${step >= num ? "text-primary" : "text-muted"}`}>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
