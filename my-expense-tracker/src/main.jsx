import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Containers/Dashboard";
import { Provider } from "react-redux";
import store from "./Redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>
);
