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

// application id - d9c37521-6dcb-4663-9a46-6df11c7ad31e
// tenent id - 32753c89-c3e7-47f1-84a3-f991463588c5

// vlaue -uEz8Q~nJwWRmcakGz1BGSC6wuwyrBmWtxtieNdxv
// secreat id c26f819f-cdbe-402b-be9c-d18dcb7bbe57
