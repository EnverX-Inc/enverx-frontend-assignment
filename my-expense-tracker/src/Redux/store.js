import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import thunkMiddleware from "redux-thunk";
import budgetExpenseSaga from "./sagas";
import budgetExpenseSlice, {
  fetchBudgetExpensesSuccess,
} from "./budgetExpenseSlice";
import { firestore } from "../Utils/firebase";

const sagaMiddleware = createSagaMiddleware();
// const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = configureStore({
  reducer: {
    budgetExpense: budgetExpenseSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(budgetExpenseSaga);

// Set up Firestore collection listeners
const budgetExpensesCollection = firestore.collection("budgetExpenses");
budgetExpensesCollection.onSnapshot((snapshot) => {
  const budgetExpenses = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      date: new Date(doc.data().date.seconds * 1000),
      id: doc.id,
    };
  });
  store.dispatch(fetchBudgetExpensesSuccess(budgetExpenses));
});

export default store;
