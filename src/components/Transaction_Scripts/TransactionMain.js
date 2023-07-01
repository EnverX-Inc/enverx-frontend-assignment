import React from "react";
import { Form,Link, useLoaderData,formData, useActionData,useNavigate } from "react-router-dom";
import db from "../firebase";
import {doc,getDoc,arrayRemove, updateDoc, setDoc, arrayUnion} from 'firebase/firestore/lite';

export async function action({request})
{
  const data = await request.formData();
  const value = data.get("filterBy");const category = data.get("category");
  return [value,category];
}


export async function loader()
{
  const data = await getDoc(doc(db,'Users',localStorage.getItem("email")))
  
  return data.data();
}

export default function Transaction()
{ 
  const navigate = useNavigate();
  const data = useLoaderData();
  let list=data.transactions;
  const action_data = useActionData();
  if(action_data){ document.getElementById("transaction").style.backgroundColor="white";
  document.getElementById("transaction_filter_list").style.display="none";
  list = list.filter(item=>item.category===action_data[1] || item.type === action_data[0].toLowerCase())
  console.log(list);
}

 async function handleItemEdit(event)
{ const type=(document.getElementById(event.target.id).getAttribute("type"))
  const date = (document.getElementById(event.target.id).getAttribute("date"))
  const data = (document.getElementById(event.target.id).children[0].children)
  const category=data[0].innerText;
  const income=data[1].innerText;
  const field = type==="income"?"income_value":"expense_value";
  const description = document.getElementById(event.target.id).children[1].innerText;
  let docs = await getDoc(doc(db,'Users',localStorage.getItem("email")))
  
  docs = (docs.data().transactions).filter(item=> item.description!==description)

  setDoc(doc(db, "Users", localStorage.getItem("email")), {transactions:[]})
  updateDoc(doc(db,'Users',localStorage.getItem("email")),{transactions: arrayUnion(...docs)},{merge:true})
 type==="income" ? navigate(`/incomeNew?category=${category}&income=${income}&description=${description}`):navigate(`/expenseNew?category=${category}&income=${income}&description=${description}`)
}

const val = list.map(item=>{return (<div id={item.description} date={item.date} type={item.type} className="transaction_list_item">
<div>
  <p>{item.category}</p>
  <h6 className={item.income_value?"income":"expense"}>{item.income_value?item.income_value:-item.expense_value}</h6>
</div>
<div className="transaction_list_item_edit">
<p>{item.description}</p>
<div>
  <img id={item.description} onClick={handleItemEdit} className="transaction_list_item_edit_img_edit" src="https://img.icons8.com/?size=512&id=49&format=png" alt="not found" />
</div>
</div>
</div>)})
console.log(action_data)
  



function handleClick(event)
  {
    event.stopPropagation();
    document.getElementById("transaction").style.backgroundColor="#EEE5FF";
    document.getElementById("transaction_filter_list").style.display="flex";
  }
function handleRemoveFilter(){
 
   document.getElementById("transaction").style.backgroundColor="white";
  document.getElementById("transaction_filter_list").style.display="none";

}
function handleFilterReset()
{
  document.getElementById('filterBy').selectedIndex=0;  document.getElementById('category').selectedIndex=0;

}
function handleFilterRemove()
{
handleRemoveFilter();
  navigate("/account/transaction")

}
  return(
  <div onClick={handleRemoveFilter} id="transaction">
    <div  id="transaction_filter" >
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
      <img onClick={handleClick} src="https://img.icons8.com/?size=512&id=59622&format=png" alt="not found" />
    </div>
    <div id="transaction_report"><Link to="/expenseReport">See your financial report</Link><h6>{'>'}</h6></div>
    <div id="transaction_list">
     {val}
    </div>
    <div onClick={handleClick} id="transaction_filter_list">
    <div>
    <p>Filter Transaction</p>
    <div onClick={handleFilterReset}>Reset</div>
    <div onClick={handleFilterRemove}>Remove</div>
    </div>
    <Form id="transaction_filter_list_form" method="post">
    <label for="filterBy">Filter By</label>
    <select id="filterBy" name="filterBy">
      <option>None</option>
      <option>Income</option>
      <option>Expense</option>
    </select>

    <label for="category">Category</label>
    <div>
      <p>Choose Category:</p>
      <select id="category" name="category" >
      <option>None</option>
      <option>HouseHold</option>
    <option>Food</option>
    <option>Medical</option>
    <option>Transportation</option>
    <option>Utilities</option>
        </select>
    </div>
    <input type="submit" value="Apply" />
    </Form>
    </div>
  </div>
)
}
