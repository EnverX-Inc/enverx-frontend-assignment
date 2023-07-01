import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { validationSchema } from './schema';

const TransactionForm = ({ handleNewTransaction, transaction}) => {
  const formik = useFormik({
    initialValues: transaction,
    validate: validationSchema,
    onSubmit: (values, {resetForm}) => {
      handleNewTransaction(values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='form'>
    <h2>Add Transactions</h2>
    <TextField
        label="Amount"
        name='amount'
        id='amount'
        placeholder="Use + for income and - for expenses"
        className='w-100'
        style={{ marginBottom: '10px' }}
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
      />
    <TextField
        label="Category"
        name="category"
        placeholder="Ex: Groceries, Rent, Salary..."
        className='w-100'
        style={{ marginBottom: '10px' }}
        value={formik.values.category}
        onChange={formik.handleChange}
        error={formik.touched.category && Boolean(formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
      />
    <TextField
        label="Description"
        placeholder="Description"
        name='desc'
        className='w-100'
        style={{ marginBottom: '10px' }}
        value={formik.values.desc}
        onChange={formik.handleChange}
        error={formik.touched.desc && Boolean(formik.errors.desc)}
        helperText={formik.touched.desc && formik.errors.desc}
      />
    <Button color="primary" variant="contained" type='submit'>Add Transaction</Button>
    </form>
  )
}

export default TransactionForm