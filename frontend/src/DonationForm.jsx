// src/DonationForm.jsx
import React, { useState } from 'react';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    thingsToDonate: '',
    quantity: '',
    location: '',
    contact: '',
    transport: '',
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirm) {
      alert('Please confirm your submission');
      return;
    }
    console.log('Donation Form Submitted:', formData);
    // Save data or send to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Donation Form</h2>
      <div>
        <label>Things to Donate:</label>
        <input type="text" name="thingsToDonate" value={formData.thingsToDonate} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact (Who am I):</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>
      <div>
        <label>Transport:</label>
        <select name="transport" value={formData.transport} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="self">Self</option>
          <option value="volunteer">Volunteer</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="confirm" checked={formData.confirm} onChange={handleChange} />
          Confirm
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DonationForm;
