import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const TransactionList = ({ transactions }) => {
  return (
    <List>
      {transactions.map((transaction) => (
        <ListItem key={transaction.id}>
          <ListItemText primary={transaction.description} secondary={transaction.category} />
          <ListItemText primary={`₹${transaction.amount}`} />
          <ListItemText primary={`${transaction.date}, ${transaction.time}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;
