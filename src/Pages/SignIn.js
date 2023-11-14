

import React, { useState } from 'react';
import { SigninFunction } from '../Services/AuthService';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // You might want to add some form validation here before calling SignupFunction
    await SigninFunction(email, password);
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
