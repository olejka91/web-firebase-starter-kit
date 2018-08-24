// @flow

export const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});
