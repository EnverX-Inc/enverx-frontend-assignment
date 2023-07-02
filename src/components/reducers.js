// reducers.js
import { combineReducers } from 'redux';

// Import your transaction and category redcers here

import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';
import categoriesReducer from './categoriesReducer';
import appReducer from './appSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  transactions: transactionsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
