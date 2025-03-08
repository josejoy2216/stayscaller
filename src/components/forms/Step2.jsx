import React, { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
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
      <h3 className="mb-4">Business Information</h3>

      {/* Address Input */}
      <input
        type="text"
        className={`form-control mb-2 ${errors.address ? "is-invalid" : ""}`}
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      {errors.address && <div className="text-danger mb-2">{errors.address}</div>}

      {/* City Input */}
      <input
        type="text"
        className={`form-control mb-2 ${errors.city ? "is-invalid" : ""}`}
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <div className="text-danger mb-2">{errors.city}</div>}

      {/* Country Input */}
      <input
        type="text"
        className={`form-control mb-2 ${errors.country ? "is-invalid" : ""}`}
        placeholder="Country"
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      />
      {errors.country && <div className="text-danger mb-2">{errors.country}</div>}

      {/* Button Group */}
      <div className="d-flex button-group mt-3">
        <button className="btn btn-secondary flex-grow-1 me-2" onClick={prevStep}>
          Back
        </button>
        <button className="btn btn-primary flex-grow-1" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
