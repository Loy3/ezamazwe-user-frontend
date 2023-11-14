//Sign Up

import React from 'react';
import { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/functions';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase-admin/firestore';
import 'dotenv/config';


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
require('dotenv').config();


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    useEffect(() => {
        setSubscription("unsuscribed");
    })

    const handleSignin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password).then(() => {
                const user = userCredential.user;
                console.log('User signed in:', user);
                alert("Successfully logged in");
            })

        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <br></br>
            <br></br>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <br></br>
            <button onClick={handleSignin}>Sign In</button>
        </div>
    );
};

export default SignIn;


