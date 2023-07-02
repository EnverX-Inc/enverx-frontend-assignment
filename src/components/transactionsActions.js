// transactionsActions.js

// Action types
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_LOADING = 'SET_LOADING';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// Action creators
export const setTransactions = (transactions) => ({
  type: SET_TRANSACTIONS,
  payload: transactions,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
