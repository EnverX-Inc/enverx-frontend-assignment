import React, { useState } from "react";

const AddTransactions = ({ id, addTransaction }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const newTransaction = {
      id: id,
      desc: desc,
      amount: amount,
      date: date,
    };
    // console.log(newTransaction);
    addTransaction(newTransaction);
    setDesc("");
    setAmount(0);
    setDate("");
  }

  return (
    <div>
      <h3>Add Transctions</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>Description</label>
          <input
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Enter Description.."
            type="text"
          />
        </div>
        <div className="form-control">
          <label>
            Amount <span className="note">[Note : + Income, - Expense]</span>
          </label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount.."
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransactions;
