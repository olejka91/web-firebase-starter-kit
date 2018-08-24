// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

export default class SignUpPage extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    event.preventDefault();

    console.log(this.props);

    const { username, email, passwordOne } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const { handleChange, handleBlur, values, touched, errors } = this.props;

    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <input
                    value={values.username}
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Full Name"
                />
                {
                  touched.username && errors.username && <p>{errors.username}</p>
                }
            </div>
            <div>
                <input
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email Address"
                />
                {
                  touched.email && errors.email && <p>{errors.email}</p>
                }
            </div>
            <div>
                <input
                    value={values.passwordOne}
                    name="passwordOne"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    placeholder="Password"
                />
                {
                  touched.passwordOne && errors.passwordOne && <p>{errors.passwordOne}</p>
                }
            </div>
            <div>
                <input
                    value={values.passwordTwo}
                    name="passwordTwo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    placeholder="Confirm Password"
                />
                {
                  touched.passwordTwo && errors.passwordTwo && <p>{errors.passwordTwo}</p>
                }
            </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
