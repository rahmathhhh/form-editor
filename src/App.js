import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import EmailField from './EmailField';
import './App.css'; // Global styles for the app

function App() {
  const [showEmailField, setShowEmailField] = useState(false);

  const handleStart = () => {
    setShowEmailField(true);
  };

  const handleBack = () => {
    setShowEmailField(false);
  };

  return (
    <div className="App">
      {!showEmailField ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <EmailField onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
