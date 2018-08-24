// @flow
import React, { Component } from "react";

import { auth } from "../../firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordReset extends Component {
  state = { ...INITIAL_STATE };

  setValue = event => {
    const {
      target: { name: propertyName, value }
    } = event;
    this.setState({ [propertyName]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          name="passwordOne"
          onChange={this.setValue}
          type="password"
          placeholder="New Password"
        />
        <input
          value={passwordTwo}
          name="passwordTwo"
          onChange={this.setValue}
          type="password"
          placeholder="Confirm New Password"
        />
        <button type="submit">Reset My Password</button>
      </form>
    );
  }
}

export default PasswordReset;
