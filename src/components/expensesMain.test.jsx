// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import expensesReducer from "../features/expensesSlice";
// import ExpenseMain from "./expensesMain";

// describe.skip("ExpenseMain component", () => {
//   let store;

//   beforeEach(() => {
//     store = configureStore({
//       reducer: {
//         expenses: expensesReducer,
//       },
//     });
//   });

//   const expense = {
//     date: "2023-07-02", // Add a valid date here
//     // Add other properties as needed
//   };
//   it("renders ExpenseMain component correctly", () => {
//     render(
//       <Provider store={store}>
//         <ExpenseMain />
//       </Provider>
//     );

//     expect(screen.getByText("Expenses Tracker")).toBeInTheDocument();
//     // Add more assertions as needed
//   });
// });
