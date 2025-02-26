import React from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="animated fadeIn">
      <h3 className="mb-4">Business Information</h3>
      <input type="text" className="form-control mb-3" placeholder="Address"
        value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
      <input type="text" className="form-control mb-3" placeholder="City"
        value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
      <input type="text" className="form-control mb-3" placeholder="Country"
        value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
      
      {/* Responsive button group */}
      <div className="d-flex button-group">
        <button className="btn btn-secondary flex-grow-1 me-2" onClick={prevStep}>Back</button>
        <button className="btn btn-primary flex-grow-1" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step2;
