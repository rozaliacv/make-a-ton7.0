// src/pages/LoginSignupPage.jsx
import React, { useState } from 'react';

import './LoginSignupPage.css';

const LoginSignupPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form>
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
                <input type="text" placeholder="Location" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Aadhaar Number" required />
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

export default LoginSignupPage;
