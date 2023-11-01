// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9_BI3xXk3eQN9Yl6d6qlhuuqIo9wn40A",
  authDomain: "netflixgpt-41cb5.firebaseapp.com",
  projectId: "netflixgpt-41cb5",
  storageBucket: "netflixgpt-41cb5.appspot.com",
  messagingSenderId: "912750209954",
  appId: "1:912750209954:web:f499fdb56c4ef3b4ace0fb",
  measurementId: "G-T6CQLT93ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();