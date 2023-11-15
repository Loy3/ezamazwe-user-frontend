

import React, { useState } from 'react';
<<<<<<< HEAD
// import { SigninFunction } from '../Services/AuthService';
=======
import { SigninFunction } from '../Services/AuthService';
>>>>>>> 2e6dc305693abdf09d9a875d1f3c2c1ec4950d38


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
<<<<<<< HEAD
    // SigninFunction(email, password);
=======
    // You might want to add some form validation here before calling SignupFunction
    await SigninFunction(email, password);
>>>>>>> 2e6dc305693abdf09d9a875d1f3c2c1ec4950d38
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
