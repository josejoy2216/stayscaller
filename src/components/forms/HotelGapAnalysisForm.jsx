import React, { useState } from 'react';
import { ArrowRight, Hotel, Users, Mail, Phone, MapPin, Building, Instagram, Facebook, Globe, Check } from 'lucide-react';
import './HotelGapAnalysisForm.css';

// Progress Step Component with connecting lines
const ProgressSteps = ({ currentStep }) => {
  return (
    <>
    <br />
    <div className="progress-steps">
      {/* Background Lines */}
      <div className="progress-line">
        {/* First connection line */}
        <div className="line">
          <div 
            className="line-fill"
            style={{ width: currentStep > 1 ? '100%' : '0%' }}
          />
        </div>
        {/* Second connection line */}
        <div className="line">
          <div 
            className="line-fill"
            style={{ width: currentStep > 2 ? '100%' : '0%' }}
          />
        </div>
      </div>

      {/* Step Circles */}
      {[
        { num: 1, label: 'Profile', icon: Users },
        { num: 2, label: 'Competitors', icon: Building },
        { num: 3, label: 'Social', icon: Globe }
      ].map(({ num, label, icon: Icon }) => (
        <div key={num} className="step-circle">
          <div
            className={`circle ${
              num === currentStep ? 'active' : 
              num < currentStep ? 'completed' : 'inactive'
            }`}
          >
            {num < currentStep ? (
              <Check className="w-8 h-8 text-white" />
            ) : (
              <Icon className={`w-8 h-8 ${num === currentStep ? 'text-white' : 'text-gray-500'}`} />
            )}
          </div>
          <div 
            className={`step-label ${
              num === currentStep ? 'active' : 
              num < currentStep ? 'completed' : 'inactive'
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

const AnimatedInput = ({ icon: Icon, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <div className={`input-group ${isFocused ? "focused" : ""}`}>
        <Icon className="input-icon" style={{ width: "1.125rem", height: "1.125rem", minWidth: "1.125rem" }} />
        <input
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1, // Ensures input takes up the remaining space
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "0.875rem",
            color: "#1f2937",
            padding: "0.25rem",
          }}
        />
      </div>
    );
  };

// Step 1: Profile Component
const ProfileStep = ({ formData, setFormData, onNext }) => {
  return (
    <div className="form-container">
      <h2 className="heading">Profile Information</h2>
      <div className="space-y-4">
        <AnimatedInput
          icon={Hotel}
          type="text"
          placeholder="Hotel Name"
          value={formData.hotelName}
          onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
        />
        <AnimatedInput
          icon={Users}
          type="text"
          placeholder="Your Name"
          value={formData.userName}
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        />
        <AnimatedInput
          icon={Phone}
          type="tel"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        <AnimatedInput
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <AnimatedInput
          icon={Building}
          type="number"
          placeholder="Number of Rooms"
          value={formData.rooms}
          onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
        />
      </div>
      <button
        onClick={onNext}
        className="btn btn-primary"
      >
        <span>Continue</span>
        <ArrowRight className="w-4 h-4 animate-bounce-x" />
      </button>
    </div>
  );
};

// Step 2: Competitor Component
const CompetitorStep = ({ formData, setFormData, onNext, onBack }) => {
  return (
    <div className="form-container">
      <h2 className="heading">Competitor Information</h2>
      <div className="space-y-4">
        <AnimatedInput
          icon={MapPin}
          type="text"
          placeholder="Location PIN"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        {[1, 2, 3, 4].map((num) => (
          <AnimatedInput
            key={num}
            icon={Building}
            type="text"
            placeholder={`Competitor ${num} Name`}
            value={formData[`competitor${num}`]}
            onChange={(e) => setFormData({ ...formData, [`competitor${num}`]: e.target.value })}
          />
        ))}
      </div>
      <div className="flex-space-x-4">
        <button onClick={onBack} className="btn btn-secondary">
          Back
        </button>
        <button onClick={onNext} className="btn btn-primary">
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 animate-bounce-x" />
        </button>
      </div>
    </div>
  );
};

// Step 3: Social Media Component
const SocialMediaStep = ({ formData, setFormData, onSubmit, onBack }) => {
  return (
    <div className="form-container">
      <h2 className="heading">Social Media Information</h2>
      <div className="space-y-4">
        <AnimatedInput
          icon={Instagram}
          type="text"
          placeholder="Instagram Handle"
          value={formData.instagram}
          onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
        />
        <AnimatedInput
          icon={Facebook}
          type="text"
          placeholder="Facebook Handle"
          value={formData.facebook}
          onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
        />
        <AnimatedInput
          icon={Globe}
          type="url"
          placeholder="Website URL"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>
      <div className="flex-space-x-4">
        <button onClick={onBack} className="btn btn-secondary">
          Back
        </button>
        <button onClick={onSubmit} className="btn btn-success">
          <span>Submit</span>
          <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const HotelGapAnalysisForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    hotelName: '',
    userName: '',
    mobile: '',
    email: '',
    rooms: '',
    location: '',
    competitor1: '',
    competitor2: '',
    competitor3: '',
    competitor4: '',
    instagram: '',
    facebook: '',
    website: ''
  });

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

const handleSubmit = async () => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbysUGgJGJAs6i0Ol20-nTu65B0ioqaFT2sroMxxeYBY2naGY7UOgeJYLJL_Uc1oKqIs/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! Your data has been saved.");
      setFormData({
        hotelName: "",
        userName: "",
        mobile: "",
        email: "",
        rooms: "",
        location: "",
        competitor1: "",
        competitor2: "",
        competitor3: "",
        competitor4: "",
        instagram: "",
        facebook: "",
        website: ""
      });
    } else {
      alert("Error! Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit. Check console.");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="max-w-md">
        <div className="card">
          <div className="card-content">
            <ProgressSteps currentStep={currentStep} />
            
            <div className="relative">
              {currentStep === 1 && (
                <ProfileStep
                  formData={formData}
                  setFormData={setFormData}
                  onNext={handleNext}
                />
              )}
              {currentStep === 2 && (
                <CompetitorStep
                  formData={formData}
                  setFormData={setFormData}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {currentStep === 3 && (
                <SocialMediaStep
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSubmit}
                  onBack={handleBack}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGapAnalysisForm;