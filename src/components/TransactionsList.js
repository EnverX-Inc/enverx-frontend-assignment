import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionsList;
