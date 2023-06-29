import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseForm from "./modules/ExpenseForm.jsx";
import Transactions from "./modules/Transactions.jsx";
import Analytics from "./modules/Analytics.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="/" element={<ExpenseForm />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
