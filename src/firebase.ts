// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import ReduxSagaFirebase from 'redux-saga-firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1nc2QH1QotXrbx8jO4KN1_FlvUhl0jz0",
  authDomain: "react-assignment-368c6.firebaseapp.com",
  projectId: "react-assignment-368c6",
  storageBucket: "react-assignment-368c6.appspot.com",
  messagingSenderId: "242304412698",
  appId: "1:242304412698:web:9dd1d8bb107b02dfa635a3",
  measurementId: "G-1SJVHJFQRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const rsf = new ReduxSagaFirebase(app)

export default rsf
// const analytics = getAnalytics(app);