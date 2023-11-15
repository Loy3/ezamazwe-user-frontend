

import React from 'react';
<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
>>>>>>> 2e6dc305693abdf09d9a875d1f3c2c1ec4950d38
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/functions';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

import env from "react-dotenv";


require('dotenv').config();
// Initialize Firebase
const firebaseConfig = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_APP_ID,
=======
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
>>>>>>> 2e6dc305693abdf09d9a875d1f3c2c1ec4950d38
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


export const SignupFunction = async (email, password) => {
    const navigate = useNavigate();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password).then(async (newUser) => {
            const user = newUser.user;
            console.log('User signed up:', user);
            navigate('/');

        })

    } catch (error) {
        console.error('Error signing up:', error.message);
    }
};


export const SigninFunction = ((email, password)=>{

    const navigate = useNavigate();

    signInWithEmailAndPassword(auth, email, password).then(()=>{
        
        alert('Successfully logged in.')
        
    }).catch((error)=>{     //Handle login error
        console.log("Failed to sign in:", error);
        
        alert('Wrong username/password entered. Re-enter username and password');
            
    });
    
})



