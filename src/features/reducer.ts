import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';

import * as transactionActions from './actions';
import { ADD_TRANSACTION,  ADD_TRANSACTION_FAILURE,  ADD_TRANSACTION_SUCCESS, GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS, RESET_ADD_TRANSACTION_SUCCESS } from './constants';
import {TransactionState} from '../types'

export type TransactionActionsAction = ActionType<typeof transactionActions>;

const defaultState = {
    transactionList:null,
    hasTransactionListLoaded:null,
    isAddSuccess:null,
    addedId:null,
    isAddFail:null,
}

export default combineReducers<TransactionState, TransactionActionsAction>({
    transaction: (state=defaultState,action) => {
        switch(action.type) {
            case GET_TRANSACTIONS: {
                return {
                    ...state,
                    // ...{transactionList:null},
                    // ...{hasTransactionListLoaded:null}
                    transactionList: null,
                    hasTransactionListLoaded: null
                    }
                }
            case GET_TRANSACTIONS_SUCCESS: {
                return {
                    ...state,
                    // ...{transactionList: action.payload},
                    // ...{hasTransactionListLoaded: true}
                    ...action.payload
                }
            } 
            case ADD_TRANSACTION: {
                return {
                    ...state,
                    addedId:null,
                    isAddSuccess: null

                };
            }   
            case ADD_TRANSACTION_SUCCESS: {
                const responseData = action.payload
                return {
                    ...state,
                    ...responseData

                };
            } 
            case RESET_ADD_TRANSACTION_SUCCESS: {
                
                return {
                    ...state,
                    ...{isAddSuccess: null}

                };
            } 
            case ADD_TRANSACTION_FAILURE: {
                const responseData = action.payload
                return {
                    ...state,
                    ...responseData

                };
            }
            default:
                return state;    
        }
            
    },
    
})