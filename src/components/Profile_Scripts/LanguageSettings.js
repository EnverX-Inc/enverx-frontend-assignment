import React from "react";
import { Link } from "react-router-dom";

export default function LanguageSettings()
{
  return(<div className="settings_common">
    <div className="settings_common_main">
<Link className="settings_common_back" to="/settings"><img src="https://img.icons8.com/?size=512&id=3483&format=png" alt="not found" /></Link>
<h4>Language</h4>
</div>
    <div id="line"/>
    <div  id="language_setting">
      <p>English (EN)</p>
      <p>Indonesian (ID)</p>
      <p>Arabic (AR)</p>
      <p>Chinese (ZH)</p>
      <p>French (FR)</p>
      <p>German (DE)</p>
      <p>Italian (IT)</p>
      <p>Korean (KO)</p>
      <p>Portuguese (PT)</p>
      <p>Russian (RU)</p>
      <p>Spanish (ES)</p>
    </div>
  </div>)
}