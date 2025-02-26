import React from "react";

const Step3 = ({ formData, setFormData, prevStep }) => {
  return (
    <div className="animated fadeIn">
      <h3 className="mb-4">Social Media</h3>
      <input type="text" className="form-control mb-3" placeholder="Instagram"
        value={formData.instagram} onChange={(e) => setFormData({ ...formData, instagram: e.target.value })} />
      <input type="text" className="form-control mb-3" placeholder="Facebook"
        value={formData.facebook} onChange={(e) => setFormData({ ...formData, facebook: e.target.value })} />
      <input type="url" className="form-control mb-3" placeholder="Website"
        value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />

      {/* Responsive button group */}
      <div className="d-flex button-group">
        <button className="btn btn-secondary flex-grow-1 me-2" onClick={prevStep}>Back</button>
        <button className="btn btn-success flex-grow-1">Submit</button>
      </div>
    </div>
  );
};

export default Step3;
