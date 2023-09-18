// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,sendEmailVerification } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLZAcF6WRLz9U2gFq5V_c_kNFs2xQOLfc",
  authDomain: "cottage-menu.firebaseapp.com",
  projectId: "cottage-menu",
  storageBucket: "cottage-menu.appspot.com",
  messagingSenderId: "678495078409",
  appId: "1:678495078409:web:84477a1486d8ec543bd0d8",
  measurementId: "G-F5PWCZV197"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth