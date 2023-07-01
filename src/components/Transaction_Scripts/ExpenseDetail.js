import React from "react";

export default function ExpenseDetails()
{
  return(<div id="expenseDetails">
    
<div id="expenseDetails_top">
  <div id="expenseDetails_top_tran">
    <p>Back</p>
    <p>Detail Transaction</p>
    <p>Bin</p>
  </div>
  <div id="expenseDetails_top_bill_det">
    <p>Rs. 120</p>
    <p>Buy some Grocery</p>
    <p>Saturday June 4</p>
  </div>
</div>
<div id="expenseDetails_mid">
<div id="expenseDetails_mid_title">
  <p>Type</p>  
  <p>Category</p>
  <p>Account</p>
</div>
<div id="expenseDetails_mid_value">
  <p>Expense</p>
  <p>Shopping</p>
  <p>Account</p>
</div>
</div>
  </div>)
}