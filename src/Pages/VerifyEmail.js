
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

    console.log(window.location.search);


    // http://localhost:3000/verify-email/?code=4e141e1fb78866b3174774388596bd6fd221b1ae84c1a15ac745a42cd43b7a0e&email=codewithmokone@gmail.com

    // https://edutech-app-eecfd.web.app/verify-email/?code=bb753ab88ec8802687bb8d1ef2b33c4a316de605d56aaeeef3f99b328b7cda08&email=simonlephotojr@gmail.com

    useEffect(() => {
        handleEmailVerification();
        console.log("Code", code);
        console.log("Email:", email);
    }, []);

    const handleEmailVerification = async () => {
        const user_email = "simonLephotoJR@gmail.com";
        const user_code = "bb753ab88ec8802687bb8d1ef2b33c4a316de605d56aaeeef3f99b328b7cda08";
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
            if (response.error) {
                setVerificationStatus("Error occurred while verifying email!", response.error);
                console.log('Server Verification Response:', response.error);
            } else {
                setVerificationStatus('Email verified successfully!');
                setStatus(true);
            }

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

