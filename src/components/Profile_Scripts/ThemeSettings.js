import React from "react";
import { Link } from "react-router-dom";

export default function ThemeSettings()
{
  return(<div className="settings_common">
   <div className="settings_common_main">
<Link className="settings_common_back" to="/settings"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h4>Theme</h4>
</div> 
    <div id="line"/>
    <div  id="language_setting">
      <p>Light</p>
      <p>Dark</p>
    </div>
  </div>)
}