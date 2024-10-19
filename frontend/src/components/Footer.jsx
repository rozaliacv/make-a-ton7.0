// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Add this for CSS styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>Contact Us: disaster@support.com | 123-456-7890</p>
        <div className="scrolling-text">
          <p>A disaster has occurred. Help is needed in affected areas. Please donate urgently!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

