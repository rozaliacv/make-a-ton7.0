import React, { useState } from 'react';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    item: '',
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
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-field">
          <label>Item</label>
          <input
            name="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Enter item to donate"
          />
        </div>
        <div className="form-field">
          <label>Quantity</label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
          />
        </div>
        <div className="form-field">
          <label>Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
        <div className="form-field">
          <label>Contact</label>
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact"
          />
        </div>
        <div className="form-field">
          <label>Transportation required</label>
          <select
            name="transportation required"
            value={formData.transport}
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="confirm"
              checked={formData.confirm}
              onChange={handleChange}
            />
            Confirm the donation
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default DonationForm;