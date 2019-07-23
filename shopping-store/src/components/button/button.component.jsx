import React from 'react';
import { ButtonContainer } from './button.styles';
const Button = ({ children, ...otherButtonProps }) => {
  return <ButtonContainer {...otherButtonProps}>{children}</ButtonContainer>;
};

export default Button;
