// authActions.js

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Action creators
export const loginSuccess = (userId) => ({
  type: LOGIN_SUCCESS,
  payload: { userId },
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
