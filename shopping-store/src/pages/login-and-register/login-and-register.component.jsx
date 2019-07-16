import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './login-and-register.styles.scss';
import Register from '../../components/register/register.component';

const RegisterLoginFormPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Register />
    </div>
  );
};

export default RegisterLoginFormPage;
