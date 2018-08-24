// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";

import withAuthorization from "../../hocs/Session/withAuthorization";
import { setUsers } from "../../store/reducers/user";
import { getAllUsers } from "../../store/selectors/user";
import { db } from "../../firebase";

class HomePage extends Component {
  componentDidMount() {
    const { setUsers } = this.props;

    db.onceGetUsers().then(snapshot => setUsers(snapshot.val()));
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
  </div>
);

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
    state => ({
      users: getAllUsers(state)
    }),
    dispatch =>
      bindActionCreators(
        {
          setUsers
        },
        dispatch
      )
  )
)(HomePage);
