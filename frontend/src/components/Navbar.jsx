// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Add this for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            exact 
            to="/" 
            className="nav-link" 
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/weather" 
            className="nav-link" 
            activeClassName="active"
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className="nav-link" 
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
