import { TransactionState } from "../types";

export const getTransactionState = (state: TransactionState) => state ? state.transaction : null;