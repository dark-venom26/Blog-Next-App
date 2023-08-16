// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCNp52M4ehrQAaecSQylf5j4-ft7AsiDY",
  authDomain: "blog-next-759bb.firebaseapp.com",
  projectId: "blog-next-759bb",
  storageBucket: "blog-next-759bb.appspot.com",
  messagingSenderId: "1010565729245",
  appId: "1:1010565729245:web:9cc39e0211070009a78434",
  measurementId: "G-NVWCZ778VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);