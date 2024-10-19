// src/pages/SignUpPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleUserType = (type) => {
    if (type === 'government') {
      navigate('/gov-official-signup');
    } else {
      navigate('/user-signup');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <p>Are you signing up as a government official or a user?</p>
      <button onClick={() => handleUserType('government')}>Government Official</button>
      <button onClick={() => handleUserType('user')}>User</button>
    </div>
  );
};

export default SignUpPage;
