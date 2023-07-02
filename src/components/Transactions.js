import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Transactions.css';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
import Transaction from './Transaction';
import HistoryIcon from '@material-ui/icons/History';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Papa from 'papaparse';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { db } from '../Firebase';
import {
  setTransactions,
  setLoading,
  setCategories,
  
} from './actions';
import {transactionsSelector,
  loadingSelector,
  categoriesSelector}from './transactionsReducer.js'

  const mapStateToProps = (state) => ({
    transactions: state.transactions.transactions,
    loading: state.transactions.loading,
    categories: state.transactions.categories,
  });
function Transactions({ calculateBalance }) {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelector);
  const loading = useSelector(loadingSelector);
  const categories = useSelector(categoriesSelector);
  const userId = firebase.auth().currentUser.uid;
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .doc(userId)
      .collection('transactions')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        dispatch(
          setTransactions(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        );
      });

    return () => unsubscribe();
  }, [dispatch, userId]);

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .doc(userId)
      .collection('transactions')
      .onSnapshot((snapshot) => {
        dispatch(
          setCategories(snapshot.docs.map((doc) => doc.data().category))
        );
        dispatch(setLoading(false));
      });

    return () => unsubscribe();
  }, [dispatch, userId]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleExportCSV = () => {
    const csvData = Papa.unparse(filteredTransactions);
    const csvBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.setAttribute('download', 'transactions.csv');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
 

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter && transaction.category !== filter) {
      return false;
    }
    if (searchTerm && !transaction.reason.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const data = filteredTransactions.map((transaction) => ({
    name: transaction.reason,
    income: transaction.amount > 0 ? transaction.amount : 0,
    expenses: transaction.amount < 0 ? Math.abs(transaction.amount) : 0,
  }));

  return (
    
    <div className="transactions">
      <h4 className="transactions__title">
        Recent Transactions&nbsp;<HistoryIcon />
      </h4>

      <div className="transactions__tableWrapper">
        {loading ? (
          <div className="transactions__loader">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div>
              <label>
                Filter by Category:
                <select value={filter} onChange={handleFilterChange}>
                  <option value="">All</option>
                  {categories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Search Transactions:
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
              </label>
            </div>
            <div>
              <button onClick={handleExportCSV}>Export as CSV</button>
            </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Amount</TableCell>
                    <TableCell align="right">Reason</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <Transaction
                      key={transaction.id}
                      amount={transaction.amount}
                      reason={transaction.reason}
                      category={transaction.category}
                      timestamp={transaction.timestamp}
                      id={transaction.id}
                      calculateBalance={calculateBalance}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="transactions__chart">
              <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#82ca9d" name="Income" />
                <Bar dataKey="expenses" fill="#8884d8" name="Expenses" />
              </BarChart>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Transactions);
