// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopupNotification from '../components/PopupNotification';
import './Homepage.css'; // Import your CSS

const HomePage = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/login-signup');
  };

  return (
    <div className="homepage-container">
      <PopupNotification />
      <h1>DISASTER MANAGEMENT</h1>

      

      {/* Sample disaster posts */}
      <div className="posts-grid">
        <div className="post-container">
          <h2 className="post-title">Flood in Kerala</h2>
          <p className="post-details">
            Severe flooding has impacted thousands of homes in Kerala. Immediate relief is required, including food, clothing, and shelter for the displaced families.
          </p>
           {/* Donate Button */}
      <button  className="donate-btn" onClick={handleDonateClick}>
        Donate
      </button>
        </div>

        <div className="post-container">
          <h2 className="post-title">Cyclone in Odisha</h2>
          <p className="post-details">
            Cyclone Fani has caused widespread destruction along the coast of Odisha. Relief teams need blankets, tarpaulins, and first-aid supplies to support those affected.
          </p>
           {/* Donate Button */}
      <button  className="donate-btn" onClick={handleDonateClick}>
        Donate
      </button>
        </div>

        <div className="post-container">
          <h2 className="post-title">Earthquake in Gujarat</h2>
          <p className="post-details">
            A major earthquake has hit the western region of Gujarat. Rescue efforts are ongoing, but there is an urgent need for water, medical kits, and temporary shelters.
          </p>
           {/* Donate Button */}
      <button  className="donate-btn" onClick={handleDonateClick}>
        Donate
      </button>
        </div>

        <div className="post-container">
          <h2 className="post-title">Landslide in Himachal</h2>
          <p className="post-details">
            Recent landslides have blocked roads and caused major disruptions in Himachal Pradesh. Families in remote areas require immediate assistance with essentials like food and medicine.
          </p>
          {/* Donate Button */}
      <button  className="donate-btn" onClick={handleDonateClick}>
        Donate
      </button>
        </div>
      </div>
      {/* Donate Button */}
      <button className="donate-btn" onClick={handleDonateClick}>
        Donate
      </button>
    </div>
    
  );
};

export default HomePage;
