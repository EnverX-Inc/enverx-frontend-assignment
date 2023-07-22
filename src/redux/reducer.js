import { ADD_TRANSACTION } from "./action";

const initialState = {
  transctions: [],
};

const expenseTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transctions: [action.payload, ...state.transctions],
      };
    default:
      return state;
  }
};

export default expenseTrackerReducer;
