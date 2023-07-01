import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "./slices/summarySlice";
import transactionReducer from "./slices/transactionSlice";
import themeReducer from "./slices/themeSlice";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    summary: summaryReducer,
    transactions: transactionReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
