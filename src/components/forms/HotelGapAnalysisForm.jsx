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

const AnimatedInput = ({ icon: Icon, error, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <div className="input-wrapper">
        <div className={`input-group ${isFocused ? "focused" : ""} ${error ? "error" : ""}`}>
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
        {error && <div className="error-message">{error}</div>}
      </div>
    );
};

// Step 1: Profile Component
const ProfileStep = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let newErrors = {};
    if (!formData.hotelName.trim()) newErrors.hotelName = "Hotel Name is required";
    if (!formData.userName.trim()) newErrors.userName = "Your Name is required";
    
    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\d{10,15}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Room validation
    if (!formData.rooms) {
      newErrors.rooms = "Number of Rooms is required";
    } else if (isNaN(formData.rooms) || parseInt(formData.rooms) <= 0) {
      newErrors.rooms = "Please enter a valid number of rooms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
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
          error={errors.hotelName} 
        />
        <AnimatedInput 
          icon={Users} 
          type="text" 
          placeholder="Your Name" 
          value={formData.userName} 
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })} 
          error={errors.userName} 
        />
        <AnimatedInput 
          icon={Phone} 
          type="tel" 
          placeholder="Mobile Number" 
          value={formData.mobile} 
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} 
          error={errors.mobile} 
        />
        <AnimatedInput 
          icon={Mail} 
          type="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          error={errors.email} 
        />
        <AnimatedInput 
          icon={Building} 
          type="number" 
          placeholder="Number of Rooms" 
          value={formData.rooms} 
          onChange={(e) => setFormData({ ...formData, rooms: e.target.value })} 
          error={errors.rooms} 
        />
      </div>
      <button onClick={() => validate() && onNext()} className="btn btn-primary">
        <span>Continue</span>
        <ArrowRight className="w-4 h-4 animate-bounce-x" />
      </button>
    </div>
  );
};

// Step 2: Competitor Component
const CompetitorStep = ({ formData, setFormData, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let newErrors = {};
    
    if (!formData.location.trim()) {
      newErrors.location = "Location PIN is required";
    } else if (!/^\d{5,6}$/.test(formData.location.replace(/[^0-9]/g, ''))) {
      newErrors.location = "Please enter a valid PIN code";
    }
    
    // At least one competitor is required
    if (!formData.competitor1.trim() && 
        !formData.competitor2.trim() && 
        !formData.competitor3.trim() && 
        !formData.competitor4.trim()) {
      newErrors.competitor1 = "At least one competitor must be specified";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
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
          error={errors.location}
        />
        {[1, 2, 3, 4].map((num) => (
          <AnimatedInput
            key={num}
            icon={Building}
            type="text"
            placeholder={`Competitor ${num} Name`}
            value={formData[`competitor${num}`]}
            onChange={(e) => setFormData({ ...formData, [`competitor${num}`]: e.target.value })}
            error={num === 1 ? errors.competitor1 : null}
          />
        ))}
      </div>
      <div className="flex-space-x-4">
        <button onClick={onBack} className="btn btn-secondary">
          Back
        </button>
        <button onClick={() => validate() && onNext()} className="btn btn-primary">
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 animate-bounce-x" />
        </button>
      </div>
    </div>
  );
};

// Step 3: Social Media Component
const SocialMediaStep = ({ formData, setFormData, onSubmit, onBack }) => {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  
  const validateWebUrl = (url) => {
    if (!url) return true; // Optional field
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  const validateSocialMedia = (handle) => {
    if (!handle) return true; // Optional field
    return /^[A-Za-z0-9._]+$/.test(handle);
  };
  
  const validate = () => {
    let newErrors = {};
    
    // Website validation (optional)
    if (formData.website && !validateWebUrl(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
    }
    
    // Instagram handle validation (optional)
    if (formData.instagram && !validateSocialMedia(formData.instagram)) {
      newErrors.instagram = "Please enter a valid Instagram handle";
    }
    
    // Facebook handle validation (optional)
    if (formData.facebook && !validateSocialMedia(formData.facebook)) {
      newErrors.facebook = "Please enter a valid Facebook handle";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmitWithValidation = async () => {
    if (!validate()) return;
    
    setSubmitting(true);
    try {
      await onSubmit();
      // Success is handled in the parent component
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  
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
          error={errors.instagram}
        />
        <AnimatedInput
          icon={Facebook}
          type="text"
          placeholder="Facebook Handle"
          value={formData.facebook}
          onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
          error={errors.facebook}
        />
        <AnimatedInput
          icon={Globe}
          type="url"
          placeholder="Website URL"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          error={errors.website}
        />
      </div>
      <div className="flex-space-x-4">
        <button onClick={onBack} className="btn btn-secondary" disabled={submitting}>
          Back
        </button>
        <button 
          onClick={handleSubmitWithValidation} 
          className="btn btn-success"
          disabled={submitting}
        >
          <span>{submitting ? "Submitting..." : "Submit"}</span>
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
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        setFormSubmitted(true);
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
        // Reset to first step after successful submission
        setCurrentStep(1);
      } else {
        alert("Error! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please check your internet connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="max-w-md">
        <div className="card">
          <div className="card-content">
            <ProgressSteps currentStep={currentStep} />
            
            {formSubmitted ? (
              <div className="form-success">
                <Check className="w-16 h-16 text-green-500" />
                <h2 className="heading">Submission Successful!</h2>
                <p className="text-center">Thank you for your information. We'll be in touch soon.</p>
                <button 
                  onClick={() => setFormSubmitted(false)} 
                  className="btn btn-primary"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGapAnalysisForm;