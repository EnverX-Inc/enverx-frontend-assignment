import React from "react";
import { useLoaderData } from "react-router-dom";
import db from "../firebase";
import {doc,getDoc} from 'firebase/firestore/lite';

export async function loader()
{
  const data = (await getDoc(doc(db, 'Users', localStorage.getItem("email")))).data()
  return data
}

export default function Chart()
{
  const data = useLoaderData();
  const balance=data.balance;
  const income=data.income;
  const expenses =data.expenses;

  async function Change(event)
  {
  
  const dat = await fetch(`https://quickchart.io/chart?c={type:%27${event.target.id}%27,data:{labels:["Income","Expenses","Balance",],datasets:[{label:%27Users%27,data:[${income},${expenses},${balance}]}]}}`)
  document.getElementById("char_img").src= dat.url;
  }

 const start_src= `https://quickchart.io/chart?c={type:%27pie%27,data:{labels:["Income","Expenses","Balance",],datasets:[{label:%27Users%27,data:[${income},${expenses},${balance}]}]}}`

  return(<div id="chart">
  <img id="char_img" src={start_src} alt="not "/>
  <div onClick={Change}>
    <p id="pie">Pie Chart</p>
    <p id="bar">Bar Graph</p>
  </div>
  </div>)
  
}