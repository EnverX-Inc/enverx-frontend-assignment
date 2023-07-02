import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
// Create the Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { transctions: transactionsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
