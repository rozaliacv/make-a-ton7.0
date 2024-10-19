// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginSignupPage from './pages/LoginSignupPage';
import GovOfficialPage from './pages/GovOfficialPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation tabs at the top */}
        <nav className="navbar">
          <NavLink exact to="/" className="nav-link" activeClassName="active-tab">
            Home
          </NavLink>
          <NavLink to="/weather" className="nav-link" activeClassName="active-tab">
            Weather
          </NavLink>
          <NavLink to="/login-signup" className="nav-link" activeClassName="active-tab">
            Login/Signup
          </NavLink>
          <NavLink to="/registered-users" className="nav-link" activeClassName="active-tab">
            Registered Users
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/registered-users" element={<GovOfficialPage />} /> {/* Updated path */}
        </Routes>

        {/* Footer remains the same at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
