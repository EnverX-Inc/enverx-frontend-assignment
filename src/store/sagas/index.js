import {
  ADD_TRANSACTION,
  GET_SUMMARY_REQUEST,
  GET_SUMMARY_SUCCESS,
  GET_TRANSACTIONS,
} from "../actions";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addTransactionApi, getSummaryApi, getTransactionsApi } from "../apis";
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

function* mySaga() {
  yield takeLatest(GET_SUMMARY_REQUEST, getSummarySaga);
  yield takeLatest(GET_TRANSACTIONS, getTransactionSaga);
  yield takeLatest(ADD_TRANSACTION, addTransactionSaga);
}

export default mySaga;
