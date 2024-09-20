import React, { useState } from 'react';
import './EmailField.css'; 

const EmailField = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="email-container">
      <div className="left-section">
        <h1>Enter Your Email</h1>
        <p>Please provide your email address to proceed further.</p>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleInputChange} className="email-input"/>
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <button onClick={onBack} className="back-button">
            Back
          </button>
          <button className='submit-button'>Submit</button>
        </div>
      </div>
      <div className="right-section">
        <div className="block block1"></div>
        <div className="block block2"></div>
        <div className="block block3"></div>
      </div>
    </div>
  );
};

export default EmailField;
