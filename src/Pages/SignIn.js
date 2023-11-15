

import React, { useState } from 'react';
import { SigninFunction } from '../Services/AuthService';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';

=======
import env from 'react-dotenv';
>>>>>>> 4fa7409a7cfd482c33ceee70787a73f411defb26

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  console.log(env);
  console.log({ env: window });
  const handleSignIn = async () => {
<<<<<<< HEAD
    try {
      const user = await SigninFunction(email, password);
      console.log('User signed in:', user);

      const user_id = user.uid;
      console.log('User id signed in:', user_id);

      navigate('/editprofile', { state: { user: user_id } });
    } catch(error) {
      console.log("Unable to log in:", error);
    }
    
=======
    SigninFunction(email, password);
>>>>>>> 4fa7409a7cfd482c33ceee70787a73f411defb26
  };

  return (
    <div>
      <h2>Sign In</h2>
<<<<<<< HEAD
      <label>Email: <br></br>
=======
      <label>Email:
>>>>>>> 4fa7409a7cfd482c33ceee70787a73f411defb26
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password: <br></br>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <br></br>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
