import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAM9bu6TLnQG7wBXAflDigqRgLVa22dfNc",
    authDomain: "sneaksngeeks-8e2c4.firebaseapp.com",
    projectId: "sneaksngeeks-8e2c4",
    storageBucket: "sneaksngeeks-8e2c4.appspot.com",
    messagingSenderId: "79208490386",
    appId: "1:79208490386:web:a4ba13709ed6dc925a0d4b",
    measurementId: "G-P0RDC16FCG"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;