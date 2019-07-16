import React, { Component } from 'react';
import './sign-in.styles.scss';
import InputBox from '../input-box/input-box.component';
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
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ email: '', password: '' });
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
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
