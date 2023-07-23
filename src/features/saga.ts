import {call,put,takeLatest} from 'redux-saga/effects';
import { ADD_TRANSACTION, GET_TRANSACTIONS } from './constants';
import { addTransactionFailure, addTransactionSuccess, getTransactions, getTransactionsSuccess} from './actions';
import { TransactionService } from '../services/transaction.service';
import { TransactionData } from '../models';

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export function* getTransactionList(action?: any) {
    try {
        const inputData = action?.payload;
        const apiResponse: ResponseGenerator = yield call(TransactionService.getTransactionList)
        const transactionDataResponse = {
            transactionList: apiResponse,
            hasTransactionListLoaded: true
        }
        // yield put
        yield put(getTransactionsSuccess(transactionDataResponse))
    }
    catch(err) {
        console.log('err api ',err)
    }
    
}

export function* addTransaction(action:any) {
    try {
        const transaction: TransactionData =  action.payload;
        const response = {
            addedId: transaction.id,
            isAddSuccess: true
        }
        yield put(addTransactionSuccess(response))
        const res:ResponseGenerator  = yield call(TransactionService.addTransaction, transaction);
    
    }
    catch(err) {
        const response = {
            isAddFail: false
        }
        yield put(addTransactionFailure(response))
    }
}

export function* watchGetTransactionList() {
    yield takeLatest(GET_TRANSACTIONS, getTransactionList)
}

export function* watchAddTransaction() {
    yield takeLatest(ADD_TRANSACTION, addTransaction)
}

export const transactionSaga = [
    call(watchGetTransactionList),
    call(watchAddTransaction)
]