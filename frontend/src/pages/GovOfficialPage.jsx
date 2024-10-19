// src/pages/GovOfficialPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GovOfficialPage.css';

const GovOfficialPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();


  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Add this line to see if it triggers
    navigate('/post');
  };
  

  return (
    <div className="Registered Users-container">
      <div className="login-signup-box">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {/* Login fields: ID, Password, and Email */}
          <div className="input-group">
            <input type="text" placeholder="Id" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>

          {/* Additional fields for signup only */}
          {isSignup && (
            <>
              <div className="input-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Mobile No" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="gender" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="official position" required />
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