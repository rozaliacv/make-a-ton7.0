// src/pages/HomePage.jsx
import React from 'react';
import PopupNotification from '../components/PopupNotification';

const HomePage = () => {
  return (
    <div>
      <PopupNotification />
      <h1>Welcome to the Disaster Management Home Page</h1>
      {/* Other content */}
    </div>
  );
};

export default HomePage;
