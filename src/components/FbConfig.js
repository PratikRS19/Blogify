// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvaoM_rybiPtNQToMSfPcR285ZdNkDyc",
  authDomain: "blogify-56ad5.firebaseapp.com",
  databaseURL: "https://blogify-56ad5-default-rtdb.firebaseio.com",
  projectId: "blogify-56ad5",
  storageBucket: "blogify-56ad5.appspot.com",
  messagingSenderId: "336632009856",
  appId: "1:336632009856:web:9919fd3a78ebe55c354265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
