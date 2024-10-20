// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Add this for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" className="nav-link" activeClassName="active">
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink to="/login-signup" className="nav-link" activeClassName="active">
            Login/Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/registered-user" className="nav-link" activeClassName="active">
            Registered Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/donate" className="nav-link donate-button">
            Donate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
