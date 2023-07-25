import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TransactionList from './Components/TransactionList';
import AddTransactionForm from './Components/AddTransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Expense Tracker
      </Typography>
      <TransactionList transactions={transactions} />
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Transaction
      </Typography>
      <AddTransactionForm addTransaction={addTransaction} />
    </Container>
  );
};

export default App;
