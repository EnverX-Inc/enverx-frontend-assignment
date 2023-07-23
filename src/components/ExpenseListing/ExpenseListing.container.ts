import {compose} from 'redux';
import {connect} from 'react-redux';

import {ExpenseListing as ExpenseListingComponent} from './ExpenseListing'
import { RootState } from '../../types';
import { transactionSelectors, transactionActions } from '../../features';


const mapStateToProps = (state: RootState) => {

    let componentState = {};
    const transactionState = transactionSelectors.getTransactionState(state.transactionState);
    if(transactionState) {
        componentState = {
            ...componentState, ...{
                transactionList: transactionState.transactionList,
                hasTransactionListLoaded: transactionState.hasTransactionListLoaded,
                isAddSuccess: transactionState.isAddSuccess,
                isAddFail: transactionState.isAddFail
            }
        }
    }
    return componentState;
}

const dispatchProps = {
    getTransactions: transactionActions.getTransactions,
    addTransaction: transactionActions.addTransaction,
    resetAddTransactionSuccess: transactionActions.resetAddTransactionSuccess
};

const enhance = compose(
    connect(
        mapStateToProps,
        dispatchProps
    )
);

export const ExpenseListing = enhance(ExpenseListingComponent);
