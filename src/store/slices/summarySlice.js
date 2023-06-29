import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
  name: "summary",
  initialState: {
    income: 0,
    expenses: 0,
    categories: [],
  },
  reducers: {
    getDataSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { getDataSuccess } = summarySlice.actions;

export default summarySlice.reducer;
