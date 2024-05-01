import React from 'react';
import './App.css';
import FloatingLabelInput from './components/forms/FloatingLabelInput';

function App() {
  return (
    <div className="App">
      <FloatingLabelInput label="Email Address" placeholder="Enter your email" />
    </div>
  );
}

export default App;
