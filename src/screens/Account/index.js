// @flow
import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { getAuthUserSessionState } from "../../store/selectors/session";
import { PasswordForgetForm, PasswordReset } from "../../components";
import withAuthorization from "../../hocs/Session/withAuthorization";

const AccountPage = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordReset />
  </div>
);

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(state => ({
    authUser: getAuthUserSessionState(state)
  }))
)(AccountPage);
