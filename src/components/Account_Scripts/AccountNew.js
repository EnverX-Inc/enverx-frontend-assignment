import React from "react";
import { Form,formData, redirect } from "react-router-dom";
import {doc,updateDoc,increment } from 'firebase/firestore/lite';
import db from "../firebase";

export async function Action({request})
{
  const data = await request.formData();
  const balance = data.get("balance");const account_name = data.get("account_name");
  updateDoc(doc(db,'Users',localStorage.getItem("email")), {
    account_name: account_name,balance:increment(balance),income:increment(balance)
  });
  
  return redirect("/account")
}

export default function NewAccount()
{


  function handleBalance(event){document.getElementById("newAccount_balance").style.border=0;}

  return(<div id="newAccount">
    <p>Add new Account</p>
    <Form method="post">
      <div id="newAccount_div">
      <label for="newAccount_balance">Balance</label>
     <div><p>Rs. </p><input onClick={handleBalance} id="newAccount_balance" type="text" placeholder="0" name="balance" maxLength={8}/></div>
      </div>
      <div id="newAccount_main">
      <input type="text" placeholder="Account Name" name="account_name" />
      <input className="SignUp_submit" type="submit" value="Continue" />
      </div>
    </Form>
  </div>)
}