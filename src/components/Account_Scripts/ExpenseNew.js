import React from "react";
import { Form,Link,redirect,useLocation } from "react-router-dom";
import db from "../firebase";
import {doc,updateDoc,increment,arrayUnion,} from 'firebase/firestore/lite';

export async function Action({request}){
  const data = await request.formData();
  const expense_value = data.get("expenseAmount");const expense_category = data.get("expenseCategory");const expense_description = data.get("expenseDescription")
  await updateDoc(doc(db,'Users',localStorage.getItem("email")), {
    expenses:increment( expense_value),transactions: arrayUnion({type:"expense",date: new Date().toDateString(),expense_value:expense_value,description:expense_description,category:expense_category})
  },{merge:true});

  return redirect("/account");
}
export default function ExpenseNew()
{

  const data = new URLSearchParams(useLocation().search);
  const category = (data.get("category"));const amount=data.get("income");const description=data.get("description")

function handlePlaceholder(event)
{
document.getElementById("expense_value").value=-Number(amount);
document.getElementById("expense_category").value=category;
document.getElementById("expense_description").value=description;
}

  return(<div className="amountChange" onLoad={handlePlaceholder}>
    <div>
<Link to="/account"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h2>Expense</h2>
</div>
<Form method="post">
<div className="amountChange_amount">
  <p>How much?</p>
  <div>
    <p>Rs. </p>
  <input id="expense_value" type="text" name="expenseAmount" placeholder="0" maxLength={8}/>
  </div>
</div>
<div className="amountChange_last">
<select id="expense_category" placeholder="Category" name="expenseCategory"> 
<option>HouseHold</option>
    <option>Food</option>
    <option>Medical</option>
    <option>Transportation</option>
    <option>Utilities</option>
</select>
<input id="expense_description" type="text" placeholder="Description" name="expenseDescription" />
<input className="SignUp_submit" type="submit" value="Continue" />
</div>
</Form>
  </div>)
}