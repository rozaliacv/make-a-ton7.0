// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(null);
  const navigate = useNavigate();

  const handleRegistrationCheck = (status) => {
    setIsRegistered(status);
  };

  const handleUserType = (type) => {
    if (type === 'government') {
      navigate('/gov-official-signup');
    } else if (type === 'user') {
      navigate('/user-signup');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {isRegistered === null ? (
        <div>
          <p>Are you already registered?</p>
          <button onClick={() => handleRegistrationCheck(true)}>Yes</button>
          <button onClick={() => handleRegistrationCheck(false)}>No</button>
        </div>
      ) : isRegistered ? (
        <div>
          <p>Are you signing in as a government official or a user?</p>
          <button onClick={() => handleUserType('government')}>Government Official</button>
          <button onClick={() => handleUserType('user')}>User</button>
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
