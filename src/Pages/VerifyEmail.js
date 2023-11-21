import React from "react";
import { useState, useEffect } from "react";
// import { VerifyEmailFunction } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";


const VerifyEmail = () => {

    const [verificationStatus, setVerificationStatus] = useState('');
    const [status, setStatus] = useState(false);

    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search);
    const code = queryParameters.get("code");
    const email = queryParameters.get("email");

    // http://localhost:3000/verify-email/?code=4e141e1fb78866b3174774388596bd6fd221b1ae84c1a15ac745a42cd43b7a0e&email=codewithmokone@gmail.com

    useEffect(() => {
        handleEmailVerification();
        console.log("Code", code);
        console.log("Email:", email);
    }, []);

    const handleEmailVerification = async () => {
        try {
            const apiUrl = await fetch(`https://ezamazwe-edutech-nodejs.onrender.com/verify-email`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email, code: code }),
                });
            const response = await apiUrl.json();

            // Handle the response here
            console.log('Server Verification Response:', response);

            setVerificationStatus('Email verified successfully!');
            setStatus(true);

            // Navigate to profile setup
            // navigate('/profilesetup', { state: { user: email } });

        } catch (error) {

            console.log("Error occurred while verifying email:", error);
        }
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {status ? (
                <div>
                    <h3>{verificationStatus}</h3>
                </div>
            ) : (
                <div>
                    <h3>Verifying...</h3>
                </div>
            )}
        </div>
    );
}

export default VerifyEmail;