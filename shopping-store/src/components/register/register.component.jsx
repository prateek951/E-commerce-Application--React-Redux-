import React, { Component } from 'react';
import InputBox from '../input-box/input-box.component';
import Button from '../button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './register.styles.scss';
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    // console.log('Form submit triggered');
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
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
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Register with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <InputBox
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Name"
            required
          />
          <InputBox
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="E-mail"
            required
          />
          <InputBox
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <InputBox
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <Button isGoogleAuth={false} type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
