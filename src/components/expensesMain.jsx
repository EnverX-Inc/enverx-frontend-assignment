import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { green, pink } from "@mui/material/colors";
// import Avatar from '@mui/material/Avatar';
import { addExpenseToFirestore } from "../features/expensesSlice";
// import { Category } from "@mui/icons-material";
// import { blue } from "@mui/material/colors";

import ExpensesForm from "./expensesForm";
import ExpensesListView from "./expensesList";

import MonthlySpends from "./Savings";

const ExpenseMain = () => {
  const dispatch = useDispatch();
  const [posted, setPosted] = useState(false);
  const [expense, setExpense] = useState({
    date: null,
    description: "",
    amount: "",
    category: "rent",
  });

  // const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!expense.date) newErrors.date = "Please select a date";
  //   if (!expense.description.trim())
  //     newErrors.description = "Please enter a description";
  //   if (!expense.amount) newErrors.amount = "Please enter an amount";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addExpenseToFirestore(expense));
    setPosted(!posted);
    setExpense({ date: null, description: "", amount: "", category: "rent" });
  };

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AppBar position="static" sx={{ marginBottom: 2 }}>
        <Toolbar>
          <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
            Expenses Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <MonthlySpends />

      {/* expenses Form  */}
      <ExpensesForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        expense={expense}
      />
      <ExpensesListView posted={posted} setPosted={setPosted} />
    </>
  );
};

export default ExpenseMain;
