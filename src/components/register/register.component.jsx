import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputBox from '../input-box/input-box.component';
import Button from '../button/button.component';
import './register.styles.scss';
import { registerUserStart } from '../../redux/user/user.actions';

const Register = ({ registerUserStart }) => {
  const [
    userRegistrationCredentials,
    setUserRegistrationCredentials
  ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    // console.log('Form submit triggered');
    const {
      displayName,
      email,
      password,
      confirmPassword
    } = userRegistrationCredentials;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      registerUserStart({ displayName, email, password });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event =>
    setUserRegistrationCredentials({
      ...userRegistrationCredentials,
      [event.target.name]: event.target.value
    });
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = userRegistrationCredentials;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Register with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <InputBox
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Name"
          required
        />
        <InputBox
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="E-mail"
          required
        />
        <InputBox
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <InputBox
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button isGoogleAuth={false} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUserStart: credentials => {
      dispatch(registerUserStart(credentials));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
