import React, { useState } from "react";

const Step3 = ({ formData, setFormData, prevStep }) => {
  const [errors, setErrors] = useState({});

  // URL validation function
  const isValidUrl = (url) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/\S*)?$/;
    return urlPattern.test(url);
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (formData.instagram && !isValidUrl(formData.instagram)) {
      newErrors.instagram = "Enter a valid Instagram URL";
    }

    if (formData.facebook && !isValidUrl(formData.facebook)) {
      newErrors.facebook = "Enter a valid Facebook URL";
    }

    if (formData.website && !isValidUrl(formData.website)) {
      newErrors.website = "Enter a valid Website URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Form submitted successfully! ✅");
    }
  };

  return (
    <div className="animated fadeIn">
      <h3 className="mb-4">Social Media</h3>

      {/* Instagram Input */}
      <input
        type="text"
        className={`form-control mb-2 ${errors.instagram ? "is-invalid" : ""}`}
        placeholder="Instagram (URL)"
        value={formData.instagram}
        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
      />
      {errors.instagram && <div className="text-danger mb-2">{errors.instagram}</div>}

      {/* Facebook Input */}
      <input
        type="text"
        className={`form-control mb-2 ${errors.facebook ? "is-invalid" : ""}`}
        placeholder="Facebook (URL)"
        value={formData.facebook}
        onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
      />
      {errors.facebook && <div className="text-danger mb-2">{errors.facebook}</div>}

      {/* Website Input */}
      <input
        type="url"
        className={`form-control mb-2 ${errors.website ? "is-invalid" : ""}`}
        placeholder="Website (URL)"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
      />
      {errors.website && <div className="text-danger mb-2">{errors.website}</div>}

      {/* Button Group */}
      <div className="d-flex button-group mt-3">
        <button className="btn btn-secondary flex-grow-1 me-2" onClick={prevStep}>
          Back
        </button>
        <button className="btn btn-success flex-grow-1" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
