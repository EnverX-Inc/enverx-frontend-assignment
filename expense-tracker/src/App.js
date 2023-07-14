import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{textAlign:'center'}}>Expense Tracker</h1>
        <TransactionForm />
        <TransactionList />
      </div>
    </Provider>
  );
};

export default App;