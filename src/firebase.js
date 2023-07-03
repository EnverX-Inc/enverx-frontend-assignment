// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnXQvx4NTdlndPJNP4OA_9QH8iP8sGP5Q",
  authDomain: "expenses-tracker-502cb.firebaseapp.com",
  projectId: "expenses-tracker-502cb",
  storageBucket: "expenses-tracker-502cb.appspot.com",
  messagingSenderId: "1014752599861",
  appId: "1:1014752599861:web:6602b557bc585a50ef767c",
  measurementId: "G-J7YS5JGD75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
