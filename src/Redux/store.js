import { configureStore } from '@reduxjs/toolkit';
import { addTransactionSlice } from './reducer';

export default configureStore({
  reducer: addTransactionSlice,
})