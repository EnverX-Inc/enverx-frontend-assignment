import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface transaction {
  description: string;
  category: string;
  amount: string;
  date: string;
}

const initialState: transaction[] = [];

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<transaction[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
