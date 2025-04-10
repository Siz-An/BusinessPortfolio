
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYh1GBBfqaybfnnDi0LJbRh9F0HFFIXYU",
  authDomain: "bookapp-73219.firebaseapp.com",
  projectId: "bookapp-73219",
  storageBucket: "bookapp-73219.appspot.com",
  messagingSenderId: "973335419103",
  appId: "1:973335419103:web:75e1f5f4df4cb9f6acb16a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// For debugging purposes during development
console.log("Firebase initialized with project:", firebaseConfig.projectId);

export default app;
