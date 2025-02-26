import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="animated fadeIn">
      <h3 className="mb-4">Profile Information</h3>
      <input type="text" className="form-control mb-3" placeholder="Full Name"
        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" className="form-control mb-3" placeholder="Email"
        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" className="form-control mb-3" placeholder="Phone"
        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <button className="btn btn-primary w-100" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
