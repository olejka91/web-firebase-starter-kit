// @flow
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink, PasswordForgetLink } from "../../components";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInPage extends Component {
  state = { ...INITIAL_STATE };

  setValue = event => {
    const {
      target: { name: propertyName, value }
    } = event;
    this.setState({ [propertyName]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div>
        <h1>SignIn Page</h1>

        <form onSubmit={this.onSubmit}>
          <input
            value={email}
            name="email"
            onChange={this.setValue}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={password}
            name="password"
            onChange={this.setValue}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }
}

export default withRouter(SignInPage);
