import { GET_SUMMARY_REQUEST, GET_SUMMARY_SUCCESS } from "../actions";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getSummaryApi } from "../apis";
import { getDataSuccess } from "../slices/summarySlice";
// import { GET_SUMMARY_SUCCESS } from "../slices/summarySlice";

function* getSummarySaga() {
  try {
    const data = yield call(getSummaryApi);
    yield put(getDataSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* mySaga() {
  yield takeLatest(GET_SUMMARY_REQUEST, getSummarySaga);
}

export default mySaga;
