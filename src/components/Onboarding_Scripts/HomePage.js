import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import db from "../firebase";
import {doc,getDoc} from 'firebase/firestore/lite';

export async function loader()
{
  const data = await getDoc(doc(db,'Users',localStorage.getItem("email")))
  
  return data.data();
}

export default function AccountHome()
{

  const data = useLoaderData();
 let [list,setList] = React.useState(data.transactions);
  function handleCalenderChange(event)
  {
    for(let i=1;i<=4;i++)
    {document.getElementById(String(i)).classList.remove("selected")}
    const id = event.target.id;
    document.getElementById(id).classList.add("selected");
    generateList(id)

  }

  function generateList(id)
  {
    switch(id)
    {
      case "1" : setList(data.transactions.filter((item)=>new Date(item.date).toDateString()===new Date().toDateString()));break;
    case "2": 
    const date = new Date().getDate();
    const day = new Date().toDateString().slice(0,3);;let from,to;
    switch(day)
    {
      case "Mon" : from=date;to=date+6;break;
      case "Tue" : from=date-1;to=date+5;break;
      case "Wed" : from=date-2;to=date+4;break;
      case "Thu" : from=date-3;to=date+3;break;
      case "Fri" : from=date-4;to=date+2;break;
      case "Sat" : from=date-5;to=date+1;break;
      case "Sun" : from=date-6;to=date;break;
    }
    if(to>30){to-=30;to = new Date(`${new Date().getMonth()} ${to} 2023`);}
    else{ to=new Date(`${new Date().getMonth()+1} ${to} 2023`);  }
    if(from<1){from+=30;from=new Date(`${new Date().getMonth()} ${from} 2023`)}
    else{ from=new Date(`${new Date().getMonth()} ${from} 2023`);}
   
    
     setList(data.transactions.filter((item)=>{const date = new Date(item.date);console.log(date,from,to);if(date>=from && date <=to){console.log(true+"   "+date);return item}}))
    break;
  case "3": setList(data.transactions.filter((item)=> new Date(item.date).getMonth()===new Date().getMonth()));break;
  case "4": setList( data.transactions.filter((item)=>new Date(item.date).getFullYear()===new Date().getFullYear()));break;
  }
  }
  
   list =  list?.map(item=>{return (<div className="transaction_list_item">
    <div >
      <p>{item.category}</p>
      <h6 className={item.income_value?"income":"expense"}>{item.income_value?item.income_value:-item.expense_value}</h6>
    </div>
    <p>{item.description}</p>
  </div>)})

  return(<div id="Account_home">
    <div id="Account_home_summary">
      <div id="Account_home_summary_top">
        <img src="https://i.pinimg.com/originals/1f/74/09/1f74093c360d0b620e9c0bd56e7b51f3.jpg" alt="not found" />
        <select>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>

        </select>
        <Link to='/notification'><img src="https://img.icons8.com/?size=512&id=84025&format=png" alt="not found" /></Link>
      </div>
      <div id="Account_home_summary_mid">
        <p>Account balance</p>
        <h1>{data.expenses ? data.balance-data.expenses:data.balance}</h1>
      </div>
      <div id="Account_home_summary_bottom">
        <div id="Account_home_summary_bottom_income">
          <h5>Income</h5>
          <p>{`Rs. ${data.income?data.income:data.balance}`}</p>
        </div>
        <div id="Account_home_summary_bottom_expense">
          <h5>Expense</h5>
          <p>{`Rs. ${data.expenses?data.expenses:0}`}</p>
        </div>
      </div>
    </div>
    <div id="Account_home_calendar" onClick={handleCalenderChange}>
      <div className="selected" id="1">Today</div>
      <div id="2">Week</div>
      <div id="3">Month</div>
      <div id="4">Year</div>
    </div>
    <div id="Account_home_recent_tran">
      <h4>Recent Transaction</h4>
      <div>View All</div>
    </div>
    <div id="Account_home_transac_list">{list}
    </div>
    
  </div>)

}
