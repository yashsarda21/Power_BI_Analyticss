// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1IWg8djztx-r4M641tzc6Pde3tk19j3U",
  authDomain: "power-bi-a996a.firebaseapp.com",
  projectId: "power-bi-a996a",
  storageBucket: "power-bi-a996a.firebasestorage.app",
  messagingSenderId: "737066616162",
  appId: "1:737066616162:web:885aa24d4ff27605e6d83b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
