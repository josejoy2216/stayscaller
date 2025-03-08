import React, { useState } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/; // Assumes a 10-digit phone number

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="animated fadeIn">
      <h3 className="mb-4">Profile Information</h3>

      {/* Full Name Input */}
      <input
        type="text"
        className={`form-control mb-2 ${errors.name ? "is-invalid" : ""}`}
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <div className="text-danger mb-2">{errors.name}</div>}

      {/* Email Input */}
      <input
        type="email"
        className={`form-control mb-2 ${errors.email ? "is-invalid" : ""}`}
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <div className="text-danger mb-2">{errors.email}</div>}

      {/* Phone Input */}
      <input
        type="tel"
        className={`form-control mb-2 ${errors.phone ? "is-invalid" : ""}`}
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {errors.phone && <div className="text-danger mb-2">{errors.phone}</div>}

      {/* Next Button */}
      <button className="btn btn-primary w-100 mt-3" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Step1;
