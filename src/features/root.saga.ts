import {all} from 'redux-saga/effects';
import { transactionSaga } from './saga';

export default function* rootSaga() {
    yield all([
        ...transactionSaga
    ])
}
