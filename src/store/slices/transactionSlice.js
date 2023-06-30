import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    list: [],
  },
  reducers: {
    getTransactionsSuccess: (state, action) => {
      return { list: [...action.payload.transactions] };
    },
  },
});

export const { getTransactionsSuccess } = transactionSlice.actions;

export default transactionSlice.reducer;
