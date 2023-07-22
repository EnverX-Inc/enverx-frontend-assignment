import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import { addTransaction, deleteTransaction } from "../redux/action";
import TransactionsList from "../components/TransactionsList";

export const Main = ({ transactions, addTransaction, deleteTransaction }) => {
  console.log(transactions);
  return (
    <div>
      <Balance transactions={transactions} />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={(id) => deleteTransaction(id)}
      />
      <AddTransactions
        addTransaction={(transction) => addTransaction(transction)}
        id={transactions[0] ? transactions[0].id + 1 : 1}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transactions) => dispatch(addTransaction(transactions)),
  deleteTranscation: (id) => dispatch(deleteTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
