

import React, { useEffect } from 'react';

// import { getAuth, createUserWithEmailAndPassword,
//      signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/functions';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore';
// import { addDoc, collection } from "firebase/firestore";
// import { useNavigate } from 'react-router-dom';
// import env from "react-dotenv";

// require('dotenv').config();
// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: env.REACT_APP_API_KEY,
//     authDomain: env.REACT_APP_AUTH_DOMAIN,
//     projectId: env.REACT_APP_PROJECT_ID,
//     storageBucket: env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: env.REACT_APP_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);



// Imports from the firebase config file
import { db, auth, storage } from './firebaseConfig';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, sendEmailVerification
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, list, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";  //Import v4 from the uuid library and use it to randomise characters 




// Upload image function
export const UploadImageFunction = (imageUpload ) => {

    let imageURL = '';

    try {
        const imageRef = ref(storage, `users/${imageUpload.name + v4()}`);

        const uploadImage = uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef).then((url) => {    //Get the image url
                imageURL = url;
                alert('Image has been uploaded.');
            })
        })

        return imageURL;

    } catch (error) {
        console.log("Error uploading image:", error);
        alert('Error uploading image!');
    }

}




// Sign up function
export const SignupFunction = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);
        alert('User signed up');
        return user; // Return the user data

    } catch (error) {
        alert("Error signing up");
        console.error('Error signing up:', error.message);
        throw new Error(error.message); // Throw an error to be caught by the calling component
    }
};

// Sign in function
export const SigninFunction = ((email, password) => {

    // const navigate = useNavigate();

    signInWithEmailAndPassword(auth, email, password).then(() => {

        alert('Successfully logged in.')
        console.log("Successfully logged in.");

    }).catch((error) => {     //Handle login error
        console.log("Failed to sign in:", error);

        alert('Wrong username/password entered. Re-enter username and password');

    });

})

// Profile setup function
export const ProfileSetupFunction = async (userId, firstName, lastName, userEmail, phoneNum, imageURL) => {
    console.log("User id:", userId);
    // const imageURL = UploadImageFunction();
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            user_id: userId,
            firstName: firstName,
            lastName: lastName,
            email: userEmail,
            phoneNum: phoneNum,
            imageURL: imageURL,
            role: "user",
            subscription: "unsuscribed",
        });
        console.log('Profile setup successfully:');
        alert("Profile setup successfully");

    } catch (error) {
        console.error('Error creating profile:', error.message);
    }
}

// Profile update function
export const ProfileUpdateFunction = async (userId, firstName, lastName, userEmail, phoneNum) => {
    console.log("User id:", userId);
    
    try {
      const userDocRef = doc(db, 'users', userId);
  
      await updateDoc(userDocRef, {
        firstName: firstName,
        lastName: lastName,
        email: userEmail,
        phoneNum: phoneNum,
        role: "user",
        subscription: "unsuscribed",
      });
  
      console.log('Profile updated successfully:');
      alert('Profile updated successfully');
  
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };




// export const EmailVerification = () => {
//     useEffect(() => {
//       if (auth.currentUser) {
//         const actionCodeSettings = {
//           // Replace 'https://your-app-url/verify-email' with the actual URL of your verification page
//           url: 'https://edutech-app-eecfd-default-rtdb.firebaseio.com/verify-email?uid=' + auth.currentUser.uid,
//           handleCodeInApp: true,
//         };
//         sendEmailVerification(auth.currentUser, actionCodeSettings)
//           .then(() => {
//             console.log('Email verification sent');
//           })
//           .catch((error) => {
//             console.error('Error sending email verification', error);
//           });
//       }
//     }, [auth.currentUser]);
//   };

