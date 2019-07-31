import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import InputBox from '../input-box/input-box.component';
import Button from '../button/button.component';
import {
  signInWithGoogleStart,
  signInWithEmailAndPasswordStart
} from '../../redux/user/user.actions';
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
    <div className="sign-in">
      <h2>I already have an account!</h2>
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
        <div className="buttons">
          <Button type="submit">Login</Button>
          <Button type="button" isGoogleAuth onClick={signInWithGoogleStart}>
            Google Login
          </Button>
        </div>
      </form>
    </div>
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
