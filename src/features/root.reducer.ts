import { combineReducers } from 'redux';

import { transactionReducer } from '.';

const rootReducer = () => combineReducers({
    transactionState: transactionReducer
});

export default rootReducer;