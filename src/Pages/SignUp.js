
import React, { useState } from 'react';
import { SignupFunction } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const user = await SignupFunction(email, password);
      console.log('User data in signup component:', user);
      const user_email = user.email;
      const user_id = user.uid;
      console.log('User id in signup component:', user_id);
      console.log('User email in signup component:', user_email);

      alert('User signed up');

      navigate('/verification', { state: { userId: user_id,  userEmail: user_email } });
   
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email: <br></br>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password: <br></br>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <br></br>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignUp;
