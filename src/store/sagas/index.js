import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  EDIT_INCOME,
  EDIT_TRANSACTION,
  GET_SUMMARY_REQUEST,
  GET_SUMMARY_SUCCESS,
  GET_TRANSACTIONS,
} from "../actions";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  addTransactionApi,
  deleteTransactionApi,
  editIncomeApi,
  editTransactionApi,
  getSummaryApi,
  getTransactionsApi,
} from "../apis";
import { getDataSuccess } from "../slices/summarySlice";
import { getTransactionsSuccess } from "../slices/transactionSlice";
// import { GET_SUMMARY_SUCCESS } from "../slices/summarySlice";

function* getSummarySaga() {
  try {
    const data = yield call(getSummaryApi);
    yield put(getDataSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* getTransactionSaga() {
  try {
    const data = yield call(getTransactionsApi);
    yield put(getTransactionsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* addTransactionSaga({ payload }) {
  try {
    yield call(addTransactionApi, payload);
    yield put({ type: GET_TRANSACTIONS });
  } catch (err) {
    console.log(err);
  }
}

function* editTransactionSaga({ payload }) {
  try {
    yield call(editTransactionApi, payload);
    yield put({ type: GET_TRANSACTIONS });
  } catch (err) {
    console.log(err);
  }
}

function* deleteTxnSaga({ id }) {
  try {
    yield call(deleteTransactionApi, id);
    yield put({ type: GET_TRANSACTIONS });
  } catch (err) {
    console.log(err);
  }
}

function* editIncome(action) {
  const newIncome = action?.payload;
  try {
    yield call(editIncomeApi, newIncome);
    yield put({ type: GET_SUMMARY_REQUEST });
  } catch (err) {
    console.log(err);
  }
}

function* mySaga() {
  yield takeLatest(GET_SUMMARY_REQUEST, getSummarySaga);
  yield takeLatest(GET_TRANSACTIONS, getTransactionSaga);
  yield takeLatest(ADD_TRANSACTION, addTransactionSaga);
  yield takeLatest(EDIT_TRANSACTION, editTransactionSaga);
  yield takeLatest(DELETE_TRANSACTION, deleteTxnSaga);
  yield takeLatest(EDIT_INCOME, editIncome);
}

export default mySaga;
