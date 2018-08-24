// @flow
import { createSelector } from 'reselect';

export const getAuthUserSessionState = (state) => state.sessionState.authUser
