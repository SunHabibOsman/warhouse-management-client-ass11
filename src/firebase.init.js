// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATqs-WZjU5Rr5mgTx3DEN8hhhpZRLygAY",
  authDomain: "computer-mania-68f0f.firebaseapp.com",
  projectId: "computer-mania-68f0f",
  storageBucket: "computer-mania-68f0f.appspot.com",
  messagingSenderId: "540519077793",
  appId: "1:540519077793:web:b56eadb262e5afa97f5de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;