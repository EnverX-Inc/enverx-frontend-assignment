export const setTransactions = (transactions) => ({
  type: 'SET_TRANSACTIONS',
  payload: transactions,
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: categories,
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm,
});
