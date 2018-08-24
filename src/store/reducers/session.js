// @flow
import { applySetAuthUser } from '../mutations/session';

const AUTH_USER_SET = 'session/AUTH_USER_SET';

const INITIAL_STATE = {
  authUser: null,
};

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    default: return state;
  }
}


// NOTE: ACTIONS
export const setUserAuth = (authUser) => ({ type: AUTH_USER_SET, authUser });
