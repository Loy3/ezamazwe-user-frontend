
import React, { useState } from 'react';
import { SignupFunction } from '../Services/AuthService';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // You might want to add some form validation here before calling SignupFunction
    await SignupFunction(email, password);
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
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignUp;
