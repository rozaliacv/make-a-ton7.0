import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import GovOfficialPage from './pages/GovOfficialPage';
import UserSignUpPage from './pages/UserSignUpPage';
import PopupNotification from './components/PopupNotification';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Popup Notification */}
        <PopupNotification />

        {/* Navigation Tabs */}
        <header>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/weather" className="nav-link">Weather</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/gov-official" element={<GovOfficialPage />} />
            <Route path="/user-signup" element={<UserSignUpPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

