// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { amount: 0, category: "", date: null, description: "" };

// const expensesSlice=createSlice({
//     name:'expenses',
//     initialState,
//     reducer
// })

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import { Timestamp } from "firebase/firestore";

// Async Thunk for Getting Expenses from Firestore
export const getExpensesFromFirestore = createAsyncThunk(
  "expenses/getExpensesFromFirestore",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "expenses"));
      const expenses = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const expense = {
          id: doc.id,
          date:
            data.date instanceof Timestamp
              ? data.date.toDate().toDateString()
              : data.date,
          description: data.description,
          amount: data.amount,
          category: data.category,
        };
        expenses.push(expense);
      });
      console.log(expenses);
      return expenses;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Async Thunk for Adding Expense to Firestore
export const addExpenseToFirestore = createAsyncThunk(
  "expenses/addExpenseToFirestore",
  async (expense) => {
    try {
      const { date, description, amount, category } = expense;
      const expenseData = {
        date: Timestamp.fromDate(new Date(date)), // Convert the date to a Firestore Timestamp object
        description,
        amount,
        category,
      };
      console.log("timestamp", expenseData);
      const docRef = await addDoc(collection(db, "expenses"), expenseData);
      console.log("Expense added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding expense: ", error.message);
    }
  }
);

// Async Thunk for Deleting Expense from Firestore
export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (expenseId) => {
    try {
      await deleteDoc(doc(db, "expenses", expenseId));
      return expenseId;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// // Async Thunk for Getting Expenses from Firestore
// export const getExpensesFromFirestore = createAsyncThunk(
//   "expenses/getExpensesFromFirestore",
//   async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "expenses"));
//       const expenses = [];
//       querySnapshot.forEach((doc) => {
//         expenses.push({ id: doc.id, ...doc.data() });
//       });
//       return expenses;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// Async Thunk for Updating Expense in Firestore
export const updateExpense = createAsyncThunk(
  "expenses/updateExpenseInFirestore",
  async ({ expenseId, expense }) => {
    try {
      await updateDoc(doc(db, "expenses", expenseId), expense);
      return { id: expenseId, ...expense };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = { data: [] };

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExpenseToFirestore.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        return state; //state .filter((expense) => expense.id !== action.payload);
      })
      .addCase(getExpensesFromFirestore.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(updateExpense.fulfilled, (state, action) => state);
  },
});

export default expensesSlice.reducer;
