import React from "react";

const Balance = ({ transctions }) => {
  console.log(transctions);

  const amount = transctions.map((transction) => Number(transction.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);

  return (
    <div>
      <h4>Balance</h4>
      <div>₹{total}</div>
    </div>
  );
};

export default Balance;
