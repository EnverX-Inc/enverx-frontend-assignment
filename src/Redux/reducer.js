import { createSlice } from '@reduxjs/toolkit'

export const addTransactionSlice = createSlice({
  name: 'addTransaction',
  initialState: {
    transactions: [],
  },
  reducers: {
    add: (state, action) => {
      state.transactions = [ ...state.transactions, action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = addTransactionSlice.actions

export default addTransactionSlice.reducer