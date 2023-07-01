import React from "react";
import { Form,Link } from "react-router-dom";

export default function TransferNew()
{
  return(<div className="amountChange amountTran">
 <div>
<Link to="/account"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h2>Transaction</h2>
</div>
  <Form>
  <div className="amountChange_amount amountTran_amount">
    <p>How much?</p>
    <div>
      <p>Rs. </p>
    <input type="text" name="expense_value" placeholder="0" maxLength={8}/>
    </div>
  </div>
  <div id="transaction_descr">
    <div>
      <input type="text" placeholder="From" name="From" />
      <input type="text" placeholder="To" name="To"/>
    </div>
  <input type="text" placeholder="Description" />
  <input className="SignUp_submit" type="submit" value="Continue" />
  </div>
  </Form>
    </div>)
}