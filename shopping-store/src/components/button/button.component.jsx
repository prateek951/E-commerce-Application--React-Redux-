import React from 'react';
import './button.styles.scss';
const Button = ({ children, ...otherButtonProps }) => {
  return (
    <button className="custom-button" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default Button;
