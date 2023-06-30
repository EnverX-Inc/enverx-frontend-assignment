export const FETCH_BUDGET_EXPENSES = "FETCH_BUDGET_EXPENSES";
export const CREATE_BUDGET_EXPENSE = "CREATE_BUDGET_EXPENSE";
export const UPDATE_BUDGET_EXPENSE = "UPDATE_BUDGET_EXPENSE";
export const DELETE_BUDGET_EXPENSE = "DELETE_BUDGET_EXPENSE";

export const fetchBudgetExpensesRequest = (filter) => {
  return {
    type: FETCH_BUDGET_EXPENSES,
    payload: filter,
  };
};

export const createBudgetExpenseRequest = (item) => {
  return {
    type: CREATE_BUDGET_EXPENSE,
    payload: item,
  };
};

export const updateBudgetExpenseRequest = (item) => {
  return {
    type: UPDATE_BUDGET_EXPENSE,
    payload: { id: item.id, item },
  };
};

export const deleteBudgetExpenseRequest = ({ id }) => {
  return {
    type: DELETE_BUDGET_EXPENSE,
    payload: { id },
  };
};
