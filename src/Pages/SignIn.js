

import React, { useState } from 'react';
import { SigninFunction } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import { Link } from 'react-router-dom';
import { GetUserDataFunction } from '../Services/AuthService';
import { UpdateUserSubscriptionFunction } from '../Services/AuthService';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscription_end_date, setSubscriptionEndDate] = useState('');
  const navigate = useNavigate();
  let userId = '';

  console.log(env);
  console.log({ env: window });

  const handleSignIn = async () => {
    try {
      const user = await SigninFunction(email, password);
      console.log('User signed in:', user);

      // const user_id = user.uid;
      userId = user.uid;
      console.log('User id signed in:', userId);

      handleGetUserData();    // Fetch user profile data
      updateSubscriptionStatus();   // update subscription status

      navigate('/userpage');
    } catch (error) {
      console.log("Unable to log in:", error);
    }

  };


  const handleGetUserData = async () => {
    
    try {
      const user = await GetUserDataFunction(userId);

      if (user) {
        console.log("User data fetched on signin component", user);
        setSubscriptionEndDate(user.subscriptionEndDate);
      }

    } catch (error) {
      console.log("Error fetching data on signin component", error);
    }
  }
  

  const updateSubscriptionStatus = async () => {
    console.log("Subscription end date:", subscription_end_date);

    try {

      await UpdateUserSubscriptionFunction(userId, subscription_end_date);

    } catch (error) {

      console.log("Error updating subscription status:", error);
    }
  }


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
