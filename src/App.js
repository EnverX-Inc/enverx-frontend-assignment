import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './Redux/reducer';
import "./App.css";
import Display from './expense-container/Display';
import TransactionForm from './expense-container/TransactionForm';
import List from './expense-container/List';

const App = () => {
  const [state, setState] = useState({income: 0, expenses: 0});
  const [transaction, setTransaction] = useState({amount: '', category: '', desc: ''});
  const dispatch = useDispatch()
  const handleNewTransaction = (transaction) => {
    setState((pre) => {
      if (transaction.amount.slice(0,1) === '-') return ({ ...pre, expenses: Number(pre.expenses) + Number(transaction.amount.slice(1))});
      if (transaction.amount.slice(0,1) === '+') return ({ ...pre, income: Number(pre.income) + Number(transaction.amount.slice(1))});
      return;
    });
    dispatch(add(transaction));
    setTransaction({amount: '', category: '', desc: ''});
  }
  const data = useSelector(sta => sta?.reducer?.transactions) || [];
  return (
    <div className='app'>
      <h2 className='text-center'>Expense Tracker</h2>
      <Display {...state} />
      <TransactionForm transaction={transaction} handleNewTransaction={handleNewTransaction} />
      <List transactions={data}/>
    </div>
  )
}

export default App;