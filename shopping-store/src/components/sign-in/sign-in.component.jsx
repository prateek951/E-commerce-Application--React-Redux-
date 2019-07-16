import React, { Component } from 'react';
import './sign-in.styles.scss';
import InputBox from '../input-box/input-box.component';
import Button from '../button/button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  }
  handleChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account!</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <InputBox
            type="email"
            name="email"
            handleChange={this.handleChange}
            label="email"
            value={email}
            required
          />
          <InputBox
            type="password"
            name="password"
            handleChange={this.handleChange}
            label="password"
            value={password}
            required
          />
          <div className="buttons">
            <Button type="submit">Login</Button>
            <Button isGoogleAuth onClick={signInWithGoogle}>
              Google Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
