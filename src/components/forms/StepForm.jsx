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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mt-5">
      <StepProgress step={step} />
      <div className="card shadow-lg p-4 animated fadeIn">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default StepForm;
