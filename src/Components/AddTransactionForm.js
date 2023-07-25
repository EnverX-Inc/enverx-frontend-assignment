import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './AddTransactionForm.css'; 

const AddTransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      addTransaction({
        id: Date.now(), 
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toLocaleDateString(),
      });
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        required
      />
      <FormControl required>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="Groceries">Groceries</MenuItem>
          <MenuItem value="Rent">Rent</MenuItem>
          <MenuItem value="Salary">Salary</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Transaction
      </Button>
    </form>
  );
};

export default AddTransactionForm;
