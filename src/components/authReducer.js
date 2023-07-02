// authReducer.js

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './authActions';

const initialState = {
  isAuthenticated: false,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload.userId,
      };
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        userId: null,
      };
    default:
      return state;
  }
};

export default authReducer;

// Selector function to get the authentication state
export const authSelector = (state) => state.auth;
