import React from 'react';
import './button.styles.scss';
const Button = ({ children, isGoogleAuth, ...otherButtonProps }) => {
  return (
    <button
      className={`${isGoogleAuth ? 'google-sign-in' : ''} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default Button;
