import { ADD_TRANSACTION } from "./action";

const initialState = {
  transactions: [],
};

const expenseTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default expenseTrackerReducer;
