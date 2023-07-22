const initialState = {
  transctions: [
    { id: 1, text: "test", amount: 10 },
    { id: 2, text: "test", amount: 20 },
    { id: 3, text: "test", amount: 15 },
    { id: 4, text: "test", amount: 15 },
  ],
};

const expenseTrackerReducer = (state = initialState, action) => {
  return state;
};

export default expenseTrackerReducer;
