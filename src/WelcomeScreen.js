import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <div className="left-section">
        <h1>Welcome to our form</h1>
        <p>Press Start to Fill in your Details</p>
        <div className="button-container">
          <button onClick={onStart} className="start-button">
            Start
          </button>
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

export default WelcomeScreen;
