import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setUserAuth } from '../../store/reducers/session'
import { firebase } from '../../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { setUserAuth } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? setUserAuth(authUser)
          : setUserAuth(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  return connect(
    null,
    dispatch => bindActionCreators({
      setUserAuth,
    }, dispatch)
  )(WithAuthentication);
}

export default withAuthentication;
