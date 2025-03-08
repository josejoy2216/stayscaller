import React, { useState } from "react";
import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    instagram: "",
    facebook: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  // Email Validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Phone Validation (Min 10 digits)
  const isValidPhone = (phone) => /^[0-9]{10,}$/.test(phone);

  // URL Validation
  const isValidUrl = (url) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/\S*)?$/;
    return urlPattern.test(url);
  };

  // Validate Step 1
  const validateStep1 = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !isValidEmail(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim() || !isValidPhone(formData.phone))
      newErrors.phone = "Enter a valid phone number (min 10 digits)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    let newErrors = {};

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 3
  const validateStep3 = () => {
    let newErrors = {};

    if (formData.instagram && !isValidUrl(formData.instagram))
      newErrors.instagram = "Enter a valid Instagram URL";

    if (formData.facebook && !isValidUrl(formData.facebook))
      newErrors.facebook = "Enter a valid Facebook URL";

    if (formData.website && !isValidUrl(formData.website))
      newErrors.website = "Enter a valid Website URL";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Proceed to next step only if validation passes
  const nextStep = () => {
    if ((step === 1 && validateStep1()) || (step === 2 && validateStep2())) {
      setStep(step + 1);
    }
  };

  // Submit final step
  const handleSubmit = () => {
    if (validateStep3()) {
      alert("Form submitted successfully! ✅");
    }
  };

  return (
    <div className="container mt-5">
      <StepProgress step={step} />
      <div className="card shadow-lg p-4 animated fadeIn">
        {step === 1 && (
          <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} errors={errors} />
        )}
        {step === 2 && (
          <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={() => setStep(step - 1)} errors={errors} />
        )}
        {step === 3 && (
          <Step3 formData={formData} setFormData={setFormData} prevStep={() => setStep(step - 1)} errors={errors} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default StepForm;
