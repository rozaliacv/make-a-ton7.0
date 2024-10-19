// src/pages/DonationPage.jsx
import React, { useState } from 'react';

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    item: '',
    quantity: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1>Donate Items</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label><br />
        <label>Item: <input type="text" name="item" value={formData.item} onChange={handleChange} /></label><br />
        <label>Quantity: <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} /></label><br />
        <label>Contact Info: <input type="text" name="contact" value={formData.contact} onChange={handleChange} /></label><br />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationPage;
