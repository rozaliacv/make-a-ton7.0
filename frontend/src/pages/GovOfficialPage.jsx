import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GovOfficialPage.css';

const GovOfficialPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: '',
    name: '',
    gender: '',
    email: '',
    position: '',
    password: '',
  });

  const toggleSignup = () => {
    setIsSignup(!isSignup);
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
    
    const formDataToSend = {
      ...formData,
    };

    try {
      const response = await fetch('http://localhost:8000/api/registered_users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(formDataToSend), // Convert form data to JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Post successful:', data);

      // Redirect to the admin page after successful submission
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Registered Users-container">
      <div className="login-signup-box">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {/* ID field (only for signup) */}
          {isSignup}

          

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional fields for signup only */}
          {isSignup && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Mobile No"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </div>
              
            </>
          )}

          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <button onClick={toggleSignup} className="toggle-signup-btn">
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default GovOfficialPage;
