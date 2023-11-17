
import React, { useState, useEffect } from 'react';
import { ResetPasswordFunction } from '../Services/AuthService';
import { isPasswordValid } from '../Services/AuthService';
import { auth } from '../Services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const user = auth.currentUser;

  useEffect(()=>{
    console.log("User:", user);
  })
  
  const navigate = useNavigate();

  const handleResetPassword = async () => {

    // Validate password complexity on the client side
    if (!isPasswordValid(newPassword)) {
      alert('Password does not meet complexity requirements.');
      return;
    } 

    if (password1 != newPassword) {
      alert('Passwords entered do not match. Re-enter passwords.');
      return;
    }

    try {
      await ResetPasswordFunction(user, currentPassword, newPassword);
      navigate('/signin');

    } catch (error) {
        console.log("Error occured at reset password function:", error);
    } 
  };

  
  return (
    <div>
      <h2>Password Reset</h2>
      <label>Current password: <br></br>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      </label>
      <br />
      <br></br>
      <label>New password: <br></br>
        <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
      </label>
      <br />
      <br></br>
      <label>Confirm password: <br></br>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <br></br>
      <p>Password should have:</p>
      <p>Min 6 characters, Uppercase letter, Lowercase letter, Number and a Special character</p>
      <br></br>
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
