import React from "react";
import { Link } from "react-router-dom";

export default function Profile()
{
  return(<div id="profile">
<div id="profile_descr">
  <img src="https://i.pinimg.com/originals/1f/74/09/1f74093c360d0b620e9c0bd56e7b51f3.jpg" alt="not found" />
  <div id="profile_descr_username">
    <h3>Username</h3>
    <p>Karan</p>
  </div>
  <div id="profile_descr_edit">
    <img src="https://img.icons8.com/?size=512&id=111452&format=png" alt="not found" />
  </div>
</div>
<div id="profile_options">
  <div className="profile_options">
    <Link>
    <img src="https://img.icons8.com/?size=512&id=209&format=png" alt="" />
    <p>Account</p>
    </Link>
  </div>
  <div className="profile_options">
    <Link to="/settings">
  <img src="https://img.icons8.com/?size=512&id=364&format=png" alt="" />
    <p>Settings</p>
    </Link>
  </div>
  <div className="profile_options">
    <Link>
  <img src="https://img.icons8.com/?size=512&id=ON6JXkDGKCJ2&format=png" alt="" />
    <p>Export Data</p>
    </Link>
  </div>
  <div className="profile_options">
    <Link to='/'>
  <img src="https://img.icons8.com/?size=512&id=P2MCfVG049Hp&format=png" alt="" />
    <p>Logout</p>
    </Link>
  </div>
</div>
  </div>)
}
