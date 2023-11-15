

import React, { useState } from 'react';
import { SigninFunction } from '../Services/AuthService';
import env from 'react-dotenv';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(env);
  console.log({ env: window });
  const handleSignIn = async () => {
    SigninFunction(email, password);
  };

  return (
    <div>
      <h2>Sign In</h2>
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
