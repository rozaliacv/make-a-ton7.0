import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignupPage.css';

const LoginSignupPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    email: '',
    name: '',
    mobile_no: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setErrorMessage(''); // Clear error message on toggle
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage(''); // Clear previous error messages

    if (isSignup) {
      // Sign-up logic
      try {
        const response = await fetch('http://localhost:8000/api/donors/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: formData.password,
            email: formData.email,
            name: formData.name,
            mobile_no: formData.mobile_no,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to sign up');
        }

        const data = await response.json();
        console.log('Sign up successful:', data);

        // Redirect to donate page after successful sign-up
        navigate('/donate');
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Sign-up failed. Please try again.');
      }
    } else {
      // Login logic
      try {
        const response = await fetch(`http://localhost:8000/api/donors/${formData.email}/${formData.password}`);

        if (!response.ok) {
          throw new Error('Failed to login');
        }

        const data = await response.json();
        console.log('Login successful:', data);

        // Check if the credentials match
        if (data.email === formData.email && data.password === formData.password) {
          // Redirect to the donate page if credentials are valid
          navigate('/donate');
        } else {
          setErrorMessage('Invalid email or password. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {/* Login fields: Password and Email */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional fields for signup only */}
          {isSignup && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Mobile No"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <button onClick={toggleSignup} className="toggle-signup-btn">
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignupPage;
