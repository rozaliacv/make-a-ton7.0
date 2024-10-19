// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import PopupNotification from '../components/PopupNotification';
import './Homepage.css'; // Import your CSS for additional styles

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDonateClick = () => {
    navigate('/login-signup'); // Redirect to the login page
  };

  return (
    <div>
      <PopupNotification />
      <h1>DISASTER MANAGEMENT</h1>
      {/* Other content */}
      <button className="donate-btn" onClick={handleDonateClick}>
        Donate
      </button>
    </div>
  );
};

export default HomePage;
