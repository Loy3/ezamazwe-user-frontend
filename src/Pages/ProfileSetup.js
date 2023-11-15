//Sign Up

import React from 'react';
import { useState, useEffect } from 'react';



// import 'dotenv/config';
// import env from "react-dotenv";

// require('dotenv').config();
// Initialize Firebase






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

