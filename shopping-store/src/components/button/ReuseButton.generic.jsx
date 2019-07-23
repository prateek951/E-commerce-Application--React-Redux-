import React from 'react';
import './button.styles.scss';
const Button = ({ children, isGoogleAuth, inverted, ...otherButtonProps }) => {
  return (
    <button
      {...otherButtonProps}
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleAuth ? 'google-sign-in' : ''
        } custom-button`}
    >
      {children}
    </button>
  );
};

export default Button;
