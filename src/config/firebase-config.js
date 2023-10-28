// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrKLn62OdkefjJeWpdseZTp36VMJ708OY",
  authDomain: "expense-tracker-27ad6.firebaseapp.com",
  projectId: "expense-tracker-27ad6",
  storageBucket: "expense-tracker-27ad6.appspot.com",
  messagingSenderId: "263072764328",
  appId: "1:263072764328:web:4ff86f27366fd120770d9d",
  measurementId: "G-ZYL2EH9WGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

