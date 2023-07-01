import React from "react";
import { Link,useLoaderData } from "react-router-dom";
import db from "../firebase";
import {doc,getDoc} from 'firebase/firestore/lite';

export async function loader()
{
  const data = await getDoc(doc(db,'Users',localStorage.getItem("email")))
  
  return data.data();
}

export default function FinanceReportIncome()
{
  const data = useLoaderData();let max_income_val=0,max_income_category;

  for(let i=0;i<data.transactions.length;i++)
  {
    if(data.transactions[i].type==="income" && Number(data.transactions[i].income_value)>max_income_val)
    {
        max_income_val=Number(data.transactions[i].income_value);
        max_income_category=data.transactions[i].category;
    }
  }
  return(<div className="financeReport_Expense financeReport_Income">
    <div className="financeReport_Expense_return">
<Link to="/account/transaction"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h2>Expense</h2>
</div>
    <p>This month</p>
    <div className="financeReport_Expense_spending">
      <p>You Earned</p>
      <p>{`Rs. ${data.income}`}</p>
    </div>
    <div className="financeReport_Expense_next"><Link><img src="https://img.icons8.com/?size=512&id=26138&format=png" alt="not found" /></Link></div>
    <div className="financeReport_Expense_max">
      <p>Your biggest earning is from:</p>
      <p>{max_income_category}</p>
      <p>{`Rs. ${max_income_val}`}</p>
    </div>
  </div>)
}