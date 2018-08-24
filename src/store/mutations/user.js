// @flow

export const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});
