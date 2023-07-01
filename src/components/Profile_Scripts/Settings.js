import React from "react";
import { Link } from "react-router-dom";

export default function Settings()
{
  return(<div className="settings_common">
  <div className="settings_common_main">
<Link className="settings_common_back" to="/account/profile"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h4>Settings</h4>
</div>
<div id="line"/>
<div className="settings">
  <h5>Currency</h5>
  <Link to="/currencySettings"><p>INR</p></Link>
</div>
<div className="settings">
  <h5>Language</h5>
  <Link to="/languageSettings"><p>English</p></Link>
</div>
<div className="settings">
  <h5>Theme</h5>
  <Link to="/themeSettings"><p>Dark</p></Link>
</div>
<div className="settings">
  <h5>About</h5>
  <p>{`>`}</p>
</div>
<div className="settings">
  <h5>Help</h5>
  <p>{`>`}</p>
</div>


  </div>)
}