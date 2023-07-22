import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./containers/Main";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1 className="heading">Expense Tracker App</h1>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
