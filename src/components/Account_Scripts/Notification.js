import React from "react";
import { Link } from "react-router-dom";

export default function Notification()
{
  return(<div id="notification">
    <div id="notification_top">
    
<Link to="/account"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
      <p>Notification</p>
      <img src="https://img.icons8.com/?size=512&id=102729&format=png" alt="not found" />
    </div>
    <div id="notifcation_list">
      <h3>Shopping budget has exceeded the limit</h3>
      <hr/>
      <h3>Utilities budget has exceeded the limit</h3>
      <hr/>

    </div>
  </div>)
}