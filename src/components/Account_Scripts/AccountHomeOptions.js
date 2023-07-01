import React from "react";
import { Outlet,Link } from "react-router-dom";

export default function AccountOptions()
{
  return(<div id="account_options_parent"><Outlet />
  <div id="Account_home_options">
  <div>
    <Link to='/account'>
    <img src="https://img.icons8.com/?size=512&id=73&format=png" alt="not found"/>
    <p>Home</p>
    </Link>
  </div>
  <div>
    <Link to='transaction'>
    <img src="https://img.icons8.com/?size=512&id=15116&format=png" alt="not found"/>
    <p>Transaction</p>
    </Link>
  </div>
  <div id="Account_home_options_mid">
  <img src="https://img.icons8.com/?size=512&id=114174&format=png" alt="not found" />
    <div id="Account_home_options_mid_div">
    <Link to="/incomeNew"><img src="https://img.icons8.com/?size=512&id=102544&format=png" alt="not found" /></Link> 
    <Link to="/expenseNew"><img src="https://img.icons8.com/?size=512&id=12386&format=png" alt="not found" /></Link>
    </div>
  </div>
  <div><Link to="/account/chart">
    <img src="https://img.icons8.com/?size=512&id=nwhUUqONScaC&format=png" alt="not found"/>
    <p>Chart</p>
    </Link>
  </div>
  <div>
    <Link to='profile'>
    <img src="https://img.icons8.com/?size=512&id=12438&format=png" alt="not found"/>
    <p>Profile</p>
    </Link>
  </div>
  
      </div>
      </div>)
}