import React from "react";

const Transaction = ({ transaction }) => {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.desc}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;
