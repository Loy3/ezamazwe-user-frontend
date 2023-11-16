
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/functions';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCI6TYQ3ZYawor7WxjhTwKnDQKT8_Sj6gI",
  authDomain: "edutech-app-eecfd.firebaseapp.com",
  databaseURL: "https://edutech-app-eecfd-default-rtdb.firebaseio.com",
  projectId: "edutech-app-eecfd",
  storageBucket: "edutech-app-eecfd.appspot.com",
  messagingSenderId: "904449562777",
  appId: "1:904449562777:web:27e8ad9dd1a27d5054c008",
  measurementId: "G-7CCCTV9REH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);

export default app;
