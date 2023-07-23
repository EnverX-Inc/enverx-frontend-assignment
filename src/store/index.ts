import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../features/root.reducer';
import rootSaga from '../features/root.saga';

// const sagaMonitor = require('@redux-saga/simple-saga-monitor');

const initialState = {}

const configureStore = () => {
    const middlewares: any = [];
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);
    //redux-logger I did not add
    // if(process.env.NODE_ENV === 'development') {
    //     const {logger} = require('redux-logger');
    //     middlewares.push(logger);
    // }

    const store = createStore(rootReducer(), initialState, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;