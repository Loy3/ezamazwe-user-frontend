

import React, { useState } from 'react';
import { SigninFunction } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  console.log(env);
  console.log({ env: window });
  const handleSignIn = async () => {
    try {
      const user = await SigninFunction(email, password);
      console.log('User signed in:', user);

      const user_id = user.uid;
      console.log('User id signed in:', user_id);

      navigate('/editprofile', { state: { user: user_id } });
    } catch(error) {
      console.log("Unable to log in:", error);
    } 
    
  };

  
  return (
    <div>
      <h2>Sign In</h2>
      <label>Email: <br></br>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password: <br></br>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <br></br>
      <button onClick={handleSignIn}>Sign In</button>
      <br></br>
      <br></br>
      <Link to='/forgotpassword'>Forgot Password</Link>
      <br></br>
      <br></br>
      <Link to='/signup'>Sign Up Now</Link>
    </div>
  );
};

export default SignIn;
