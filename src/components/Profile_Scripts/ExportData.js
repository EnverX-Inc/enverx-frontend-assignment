import React from "react";

export default function ExportData()
{
  return(<div id="exportData">

    <div className="exportData">
      <p>When do you want to export your data</p>
      <select></select>
    </div>
    <div className="exportData">
    <p>Date range</p>
      <select></select>
    </div>
    <div className="exportData">
    <p>Format of data to be exported</p>
      <select></select>
    </div>

  </div>)
}