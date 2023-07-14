import React ,{useState} from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../actions';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';



const TransactionForm=({ addTransaction }) =>{
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !category) {
          return;
        }
        const transaction = {
          id: Date.now(),
          date: new Date().toLocaleDateString(),
          description,
          amount,
          category,
        };
        addTransaction(transaction);
        setDescription('');
        setAmount('');
        setCategory('');
  };

  return (
    <>
    <div>
          <h3 style={{textAlign:'center'}}>Add Transaction </h3>
         
          <form onSubmit={handleSubmit} style={{backgroundColor:'brisque',margin:'auto',width:'10%'}}>
            <TextField style={{marginBottom:'10px'}}
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            />
            <br/>
            <TextField style={{marginBottom:'10px'}}
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />
            <br/>
            <FormControl required style={{marginBottom:'10px'}}>
                <InputLabel style={{width:'60%'}}>Category</InputLabel>
                <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Rent">Rent</MenuItem>
                    <MenuItem value="Groceries">Groceries</MenuItem>
                    <MenuItem value="Salary">Salary</MenuItem>
                </Select>
            </FormControl>
            <br/>
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
            </form>

      </div>
    </>
  );
};

export default connect(null, { addTransaction })(TransactionForm);