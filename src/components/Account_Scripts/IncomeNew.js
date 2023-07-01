import React from "react";
import { Form,Link, redirect, useLocation } from "react-router-dom";
import db from "../firebase";


import {doc,updateDoc,increment,arrayUnion } from 'firebase/firestore/lite';

export async function Action({request}){
const data = await request.formData();
  const income_value = data.get("income_value");const income_category = data.get("income_category");const income_description = data.get("income_description")
  await updateDoc(doc(db,'Users',localStorage.getItem("email")), {
    balance:increment(income_value),income:increment(income_value),transactions: arrayUnion({type:"income",date: new Date().toDateString(),income_value:income_value,description:income_description,category:income_category})
  },{merge:true});

  return redirect("/account");
}


export default function IncomeNew()
{
  const data = new URLSearchParams(useLocation().search);
  const category = (data.get("category"));const amount=data.get("income");const description=data.get("description")

function handlePlaceholder(event)
{
document.getElementById("income_value").value=amount;
document.getElementById("income_category").value=category;
document.getElementById("income_description").value=description;
}

  return(<div className="amountChange amountIncome" onLoad={handlePlaceholder}>
 <div>
<Link to="/account"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h2>Income</h2>
</div>
  <Form method="post">
  <div className="amountChange_amount amountIncome_amount">
    <p>How much?</p>
    <div>
      <p>Rs. </p>
    <input id="income_value" type="text" name="income_value" placeholder="0" maxLength={8} />
    </div>
  </div>
  <div className="amountChange_last">
  <select id="income_category" placeholder="Category" name="income_category">
    <option>HouseHold</option>
    <option>Food</option>
    <option>Medical</option>
    <option>Transportation</option>
    <option>Utilities</option>
  </select>
  <input id="income_description" type="text" placeholder="Description" name="income_description" />
  <input className="SignUp_submit" type="submit" value="Continue" />
  
  </div>
  </Form>
    </div>)
}