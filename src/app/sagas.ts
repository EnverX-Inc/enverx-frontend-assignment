import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put } from "redux-saga/effects";
import { firestore } from "../firebaseSetup";
import { getDocs, addDoc, collection, query } from "firebase/firestore";
import { all } from "redux-saga/effects";

import {
  setTransactions,
  transaction,
} from "../features/transactions/transactionsSlice";

interface FetchTransactionsSagaAction extends PayloadAction<string> {
  payload: string;
}
interface AddTransactionSaga extends PayloadAction<transaction> {
  payload: transaction;
}

function* fetchTransactionsSaga(action: FetchTransactionsSagaAction) {
  const UsersCollectionRef = collection(firestore, "app-database");

  try {
    // Create a Firestore query to fetch user data
    const q = query(UsersCollectionRef);
    const querySnapshot = yield call(getDocs, q);
    const data: transaction[] = [];
    querySnapshot.forEach((doc) => {
      // Push each document's data to the data array
      const transactionData = doc.data() as transaction;
      data.push(transactionData);
    });
    // Dispatch the setTransactions action to set the data state
    yield put(setTransactions(data));
  } catch (error) {
    console.log("error in fetching data", error);
  }
}
function* addTransactionSaga(action: AddTransactionSaga) {
  const UsersCollectionRef = collection(firestore, "app-database");

  try {
    // Create a Firestore query to fetch user data
    yield call(addDoc, UsersCollectionRef, action.payload);
    // Dispatch the setTransactions action to update the data state
    yield put(setTransactions([action.payload]));
  } catch (error) {
    console.log("error in adding data", error);
  }
}

// Create a saga watcher to listen for specific actions
function* userSaga() {
  yield takeLatest("user/fetchData", fetchTransactionsSaga); // Start fetchTransactionsSaga when 'user/fetchData' action is dispatched
  yield takeLatest("user/addData", addTransactionSaga); // Start addTransactionSaga when 'user/addData' action is dispatched
}

// Export the saga watcher
export function* rootSaga() {
  yield all([userSaga()]);
}
