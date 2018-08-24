import { applySetUsers } from '../mutations/user';

const USERS_SET = 'user/USERS_SET';

const INITIAL_STATE = {
  users: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_SET: {
      return applySetUsers(state, action);
    }
    default: return state;
  }
}

// NOTE: ACTIONS

export const setUsers = (users) => ({ type: USERS_SET, users });
