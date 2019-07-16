import React from 'react';
import './button.styles.scss';
const Button = ({ children, isGoogleAuth, ...otherButtonProps }) => {
  return (
    <button
      {...otherButtonProps}
      className={`${isGoogleAuth ? 'google-sign-in' : ''} custom-button`}
    >
      {children}
    </button>
  );
};

export default Button;
