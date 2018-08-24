// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";

const INITIAL_STATE = {
  email: "",
  error: null
};

export default class PasswordForgetForm extends Component {
  state = { ...INITIAL_STATE };

  setValue = event => {
    const {
      target: { name: propertyName, value }
    } = event;
    this.setState({ [propertyName]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          name="email"
          onChange={this.setValue}
          type="text"
          placeholder="Email Address"
        />
        <button type="submit">Reset My Password</button>
      </form>
    );
  }
}
