import firebase from "firebase";

const firebaseConfig = {
    /*firebase credentials*/
    apiKey: "AIzaSyAkUT_SbsABS4N9fouMjNJT5gfZmusS7l0",
    authDomain: "demo2-67be0.firebaseapp.com",
    projectId: "demo2-67be0",
    storageBucket: "demo2-67be0.appspot.com",
    messagingSenderId: "678617616053",
    appId: "1:678617616053:web:1d39f71b231c3a6f59f8fc",
    measurementId: "G-4VRL0G8L70"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { auth, db, storage };
