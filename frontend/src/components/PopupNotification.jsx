// src/components/PopupNotification.jsx
import React, { useEffect, useState } from 'react';
import './PopupNotification.css';

const PopupNotification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; // Don't render if not visible

  return (
    <div className="popup">
      <p>This is a notification about required items!</p>
      <button className="close-btn" onClick={() => setVisible(false)}>X</button>
    </div>
  );
};

export default PopupNotification;




