import React from "react";

const AddTransactions = () => {
  return (
    <div>
      <h3>Add Transctions</h3>
      <form>
        <div className="form-control">
          <label>Description</label>
          <input placeholder="Enter Description.." type="text" />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input placeholder="Enter Amount.." type="number" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransactions;
