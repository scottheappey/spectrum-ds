import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FloatingLabelInput.css';

const FloatingLabelInput = ({ label, type, placeholder, ...props }) => {
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (value.length === 0) {
      setFocused(false);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`floating-label-input ${isFocused || value ? 'focused' : ''}`}>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        {...props}
      />
      <label className={isFocused || value ? 'label-focused' : ''}>
        {label}
      </label>
    </div>
  );
};

// Prop Types for the FloatingLabelInput
FloatingLabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

// Default Props for the FloatingLabelInput
FloatingLabelInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default FloatingLabelInput;
