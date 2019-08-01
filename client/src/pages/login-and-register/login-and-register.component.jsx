import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './login-and-register.styles.scss';
import Register from '../../components/register/register.component';
import { SignInAndSignUpContainer } from './login-and-register.styles';

const RegisterLoginFormPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <Register />
    </SignInAndSignUpContainer>
  );
};

export default RegisterLoginFormPage;
