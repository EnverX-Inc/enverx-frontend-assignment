import { createSlice } from "@reduxjs/toolkit";

const budgetExpenseSlice = createSlice({
  name: "budgetExpense",
  initialState: {
    budgetExpense: [],
  },
  reducers: {
    fetchBudgetExpensesSuccess: (state, action) => {
      state.budgetExpense = action.payload;
    },
  },
});

export const {
  fetchBudgetExpensesSuccess,

  // Other exported actions
} = budgetExpenseSlice.actions;

export default budgetExpenseSlice.reducer;
