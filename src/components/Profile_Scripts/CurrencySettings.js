import React from "react";
import { Link } from "react-router-dom";

export default function CurrencySettings()
{
  return(<div className="settings_common">
    <div className="settings_common_main">
<Link className="settings_common_back" to="/settings"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h4>Currency</h4>
</div>
<div id="line"/>
<div className="settings">
  <h5>India (INR)</h5>
</div>
<div className="settings">
  <h5>United States (USD)</h5>
</div>
<div className="settings">
  <h5>Japan (JPY)</h5>
</div>
<div className="settings">
  <h5>Russia (RUB)</h5>
</div>
<div className="settings">
  <h5>Germany (EUR)</h5>
</div>
  </div>)
}