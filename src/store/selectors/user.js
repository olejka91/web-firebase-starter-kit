// @flow
import { createSelector } from 'reselect';

export const getAllUsers = (state) => state.userState.users;
