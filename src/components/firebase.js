import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDJJMXuuiVo69rtFJjJ8XcrwPODcxnE_0w",
  authDomain: "expensetracker-ec8cc.firebaseapp.com",
  projectId: "expensetracker-ec8cc",
  storageBucket: "expensetracker-ec8cc.appspot.com",
  messagingSenderId: "422258166721",
  appId: "1:422258166721:web:00714359bbed1cfdb63d40",
  measurementId: "G-19B9NEW95T"
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;