import React, { useState } from 'react';
import './AdminPage.css'; // Ensure CSS is included for styling

const AdminPage = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    quantity: '',
    category: '',
    emergencyLevel: '',
    contactNumber: '',
    comment: '',
  });

  const handlePostClick = () => {
    setShowPostForm(!showPostForm); // Toggle form display
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the additional fields needed for the post request
    const postData = {
      posted_by: 'John Doe', // Replace with the actual user identifier
      location: formData.location,
      date_posted: new Date().toISOString(), // Current date and time
      comment: formData.comment,
      quantity: formData.quantity,
      category: formData.category,
      emergencyLevel: formData.emergencyLevel,
      contactNumber: formData.contactNumber,
    };

    try {
      const response = await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Post successful:', data);

      // Optionally reset the form after successful submission
      setFormData({
        location: '',
        quantity: '',
        category: '',
        emergencyLevel: '',
        contactNumber: '',
        comment: '',
      });
      setShowPostForm(false); // Hide the form after submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-container">
      <div className="user-details">
        <div className="user-icon">
          {/* Placeholder for user icon */}
          <div className="icon-placeholder">👤</div>
          <p>Name: John Doe</p>
          <p>Post: Disaster Official</p>
          <p>Contact: +1234567890</p>
        </div>
      </div>

      <div className="donation-overview">
        <h2>Donation Overview</h2>
        {/* Donation details go here */}
        <p>No recent donations</p>

        {/* To Post button */}
        <button className="post-btn" onClick={handlePostClick}>
          To Post
        </button>

        {showPostForm && (
          <div className="post-form">
            <h3>Post Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  required
                />
              </div>

              <div className="form-field">
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  required
                />
              </div>

              <div className="form-field">
                <label>Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="women">Women's</option>
                  <option value="kids">Kids</option>
                  <option value="clothing">Clothing</option>
                </select>
              </div>

              <div className="form-field">
                <label>Emergency Level:</label>
                <select
                  name="emergencyLevel"
                  value={formData.emergencyLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Emergency Level</option>
                  <option value="3">3 (High)</option>
                  <option value="2">2 (Medium)</option>
                  <option value="1">1 (Low)</option>
                </select>
              </div>

              <div className="form-field">
                <label>Contact Number:</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  required
                />
              </div>

              <div className="form-field">
                <label>Comment:</label>
                <input
                  type="text"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Add a comment (optional)"
                />
              </div>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
