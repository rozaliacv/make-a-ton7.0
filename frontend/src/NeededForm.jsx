// src/NeededForm.jsx
import React, { useState } from 'react';

const NeededForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    category: '',
    quantity: '',
    emergency: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Needed Form Submitted:', formData);
    // Save data or send to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Needed People</h2>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Emergency:</label>
        <select name="emergency" value={formData.transport} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <div>
        <label>Contact Number:</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NeededForm;
