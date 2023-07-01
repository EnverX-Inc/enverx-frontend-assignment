import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import db from "../firebase";
import {doc,getDoc} from 'firebase/firestore/lite';

export async function loader()
{
  const data = await getDoc(doc(db,'Users',localStorage.getItem("email")))
  
  return data.data();
}

export default function FinanceReportExpense()
{
  const data = useLoaderData();let max_expense_val=0,max_expense_category;

  for(let i=0;i<data.transactions.length;i++)
  {
    if(data.transactions[i].type==="expense" && Number(data.transactions[i].expense_value)>max_expense_val)
    {
        max_expense_val=Number(data.transactions[i].expense_value);
        max_expense_category=data.transactions[i].category;
    }
  }

  return(<div className="financeReport_Expense">
    <div className="financeReport_Expense_return">
<Link to="/account/transaction"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h2>Expense</h2>
</div>
    <p>This month</p>
    <div className="financeReport_Expense_spending">
      <p>You Spent</p>
      <p>{`Rs. ${data.expenses}`}</p>
    </div>
    <div className="financeReport_Expense_next"><Link to="/incomeReport"><img src="https://img.icons8.com/?size=512&id=26138&format=png" alt="not found" /></Link></div>
    <div className="financeReport_Expense_max">
      <p>Your biggest spending is from:</p>
      <p>{max_expense_category}</p>
      <p>{`Rs. ${max_expense_val}`}</p>
    </div>
  </div>)
}