// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZILohfX0OWucQ74EPjEDqy6Q3D0xZB0g",
  authDomain: "public-complaints-app.firebaseapp.com",
  databaseURL: "https://public-complaints-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "public-complaints-app",
  storageBucket: "public-complaints-app.appspot.com",
  messagingSenderId: "226049880180",
  appId: "1:226049880180:web:fb1f2fa32639b4b9ffe121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);