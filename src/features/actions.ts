import { action } from 'typesafe-actions'
import { ADD_TRANSACTION,  ADD_TRANSACTION_FAILURE,  ADD_TRANSACTION_SUCCESS, GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS, RESET_ADD_TRANSACTION_SUCCESS } from './constants'
import { TransactionData } from '../models';

export const getTransactions = () => action(GET_TRANSACTIONS);
export const getTransactionsSuccess = (payload:any) => action(GET_TRANSACTIONS_SUCCESS, payload)

export const addTransaction = (transaction: TransactionData) => action(ADD_TRANSACTION, transaction)
export const addTransactionSuccess = (payload:any) => action(ADD_TRANSACTION_SUCCESS, payload); 
export const resetAddTransactionSuccess = () => action(RESET_ADD_TRANSACTION_SUCCESS); 
export const addTransactionFailure = (payload:any) => action(ADD_TRANSACTION_FAILURE, payload); 

