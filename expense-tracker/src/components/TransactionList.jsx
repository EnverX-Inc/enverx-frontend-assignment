import React from 'react';
import { connect } from 'react-redux';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <Typography variant="h6" style={{textAlign:'center'}}>Recent Transactions</Typography>
      <List style={{width:'50%',textAlign:'center'}}>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <ListItemText
              primary={transaction.date}
              secondary={transaction.description}
            />
            <ListItemSecondaryAction>
              <Typography variant="subtitle1"> ₹{transaction.amount}</Typography>
              <Typography variant="subtitle2">{transaction.category}</Typography>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps)(TransactionList);
