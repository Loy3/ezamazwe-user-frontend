//Sign Up

import React from 'react';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/functions';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase-admin/firestore';
import { addDoc, collection } from "firebase/firestore";
import 'dotenv/config';
import env from "react-dotenv";

// require('dotenv').config();
// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



const ProfileSetup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [image, setImage] = useState('');


  const handleSignup = async () => {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
          user_id: user,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNum: phoneNum,
          role: "user",
          subscription: "unsuscribed",
        });
        console.log('User signed up:', user);
      
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <br></br>
      <br></br>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setFirstName(e.target.value)} />
      <br></br>
      <br></br>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setLastName(e.target.value)} />
      <br></br>
      <br></br>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPhoneNum(e.target.value)} />
      <br></br>
      <br></br>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default ProfileSetup;

