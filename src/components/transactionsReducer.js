// transactionsReducer.js

import { SET_TRANSACTIONS, SET_LOADING, SET_CATEGORIES } from './transactionsActions';

const initialState = {
  transactions: [],
  loading: true,
  categories: [],
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;

// Selector functions to get transactions, loading, and categories state
export const transactionsSelector = (state) => state.transactions.transactions;
export const loadingSelector = (state) => state.transactions.loading;
export const categoriesSelector = (state) => state.transactions.categories;
