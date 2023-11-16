
import React, { useState } from 'react';
import { ResetPasswordFunction } from '../Services/AuthService';
import { isPasswordValid } from '../Services/AuthService';
import { auth } from '../Services/firebaseConfig';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const user = auth.currentUser;

  const handleResetPassword = async () => {

    // Validate password complexity on the client side
    if (!isPasswordValid(newPassword)) {
      alert('Password does not meet complexity requirements.');
      return;
    }

    try {
      await ResetPasswordFunction(email, newPassword);
    } catch (error) {
        console.log("Error occured at reset password function:", error);
    } 
  };

  

  return (
    <div>
      <h2>Password Reset</h2>
      <label>Email: <br></br>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <br></br>
      <label>New Password:
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
