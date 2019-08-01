import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputBox from '../input-box/input-box.component';
import Button from '../button/button.component';
import {
  signInWithGoogleStart,
  signInWithEmailAndPasswordStart
} from '../../redux/user/user.actions';
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';
const SignIn = ({ signInWithEmailAndPasswordStart, signInWithGoogleStart }) => {
  const [userLoginCredentials, setUserLoginCredentials] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = event => {
    event.preventDefault();
    signInWithEmailAndPasswordStart(userLoginCredentials);
    setUserLoginCredentials({
      email: '',
      password: ''
    });
  };

  const handleChange = event =>
    setUserLoginCredentials({
      ...userLoginCredentials,
      [event.target.name]: event.target.value
    });
  const { email, password } = userLoginCredentials;
  return (
    <SignInContainer>
      <SignInTitle>I already have an account!</SignInTitle>
      <span>Sign in with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <InputBox
          type="email"
          name="email"
          handleChange={handleChange}
          label="email"
          value={email}
          required
        />
        <InputBox
          type="password"
          name="password"
          handleChange={handleChange}
          label="password"
          value={password}
          required
        />
        <ButtonsBarContainer>
          <Button type="submit">Login</Button>
          <Button type="button" isGoogleAuth onClick={signInWithGoogleStart}>
            Google Login
          </Button>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInWithGoogleStart: () => {
      dispatch(signInWithGoogleStart());
    },
    signInWithEmailAndPasswordStart: userLoginCredentials => {
      dispatch(signInWithEmailAndPasswordStart(userLoginCredentials));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
