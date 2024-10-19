// src/RegisteredUserForm.jsx
import React, { useState } from 'react';

const RegisteredUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    contact: '',
    post: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered User Form Submitted:', formData);
    // Save data or send to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form for Registered Users</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="mail" value={formData.mail} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact:</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>
      <div>
        <label>Post in Govt:</label>
        <input type="text" name="post" value={formData.post} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisteredUserForm;
