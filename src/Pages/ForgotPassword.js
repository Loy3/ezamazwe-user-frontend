

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import { Link } from 'react-router-dom';
import { ForgotPasswordFunction } from '../Services/AuthService';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Validate email
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleForgotPassword = async () => {

        if (isEmailValid(email)) {
            try {
                await ForgotPasswordFunction(email);
                navigate('/'); // Navigate to sign in page
            } catch (error) {
                console.log("Unable to update password:", error);
            }
        } else {
            console.log("Email is not valid!");
            alert("Email is not valid. Please enter the correct email address!");
        }

    };


    return (
        <div>
            <h2>Forgot Passord</h2>
            <label>Enter Email: <br></br>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <br></br>
            <button onClick={handleForgotPassword}>Change Password</button>
            <br></br>
        </div>
    );
};

export default ForgotPassword;
