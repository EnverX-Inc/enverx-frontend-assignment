import { takeLatest, put, call } from "redux-saga/effects";

import {
  createBudgetExpense,
  updateBudgetExpense,
  deleteBudgetExpense,
  fetchBudgetExpenses,
} from "../Utils/api";
import {
  CREATE_BUDGET_EXPENSE,
  DELETE_BUDGET_EXPENSE,
  FETCH_BUDGET_EXPENSES,
  UPDATE_BUDGET_EXPENSE,
} from "./actions";
import { fetchBudgetExpensesSuccess } from "./budgetExpenseSlice";

// Worker saga for fetching budget expenses
function* fetchBudgetExpensesSaga(action) {
  try {
    const snapshot = yield call(fetchBudgetExpenses, action.payload);
    const budgetExpenses = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        date: new Date(doc.data().date.seconds * 1000),
        id: doc.id,
      };
    });
    yield put(fetchBudgetExpensesSuccess(budgetExpenses));
  } catch (error) {
    yield put(console.error(error.message));
  }
}

// Worker saga for creating a budget expense
function* createBudgetExpenseSaga(action) {
  try {
    yield call(createBudgetExpense, action.payload);
  } catch (error) {
    yield put(console.error(error.message));
  }
}

// Worker saga for updating a budget expense
function* updateBudgetExpenseSaga(action) {
  try {
    yield call(updateBudgetExpense, action.payload.id, action.payload.item);
  } catch (error) {
    yield put(console.error(error.message));
  }
}

// Worker saga for deleting a budget expense
function* deleteBudgetExpenseSaga(action) {
  try {
    yield call(deleteBudgetExpense, action.payload.id);
  } catch (error) {
    yield put(console.error(error.message));
  }
}

// Watcher saga to listen for fetch and create actions
export default function* budgetExpenseSaga() {
  yield takeLatest(FETCH_BUDGET_EXPENSES, fetchBudgetExpensesSaga);
  yield takeLatest(CREATE_BUDGET_EXPENSE, createBudgetExpenseSaga);
  yield takeLatest(UPDATE_BUDGET_EXPENSE, updateBudgetExpenseSaga);
  yield takeLatest(DELETE_BUDGET_EXPENSE, deleteBudgetExpenseSaga);
}
