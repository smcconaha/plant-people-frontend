// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMOVpaLHVNTe55mX9SC5gc1jzISnvAq8",
  authDomain: "plant-people-1b6bf.firebaseapp.com",
  projectId: "plant-people-1b6bf",
  storageBucket: "plant-people-1b6bf.appspot.com",
  messagingSenderId: "170490147676",
  appId: "1:170490147676:web:fc809ea1e212546054c799",
  measurementId: "G-JGCZ394764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);