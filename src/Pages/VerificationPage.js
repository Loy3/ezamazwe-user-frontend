// ActivationPage.js
import React, { useEffect, useState } from 'react';
import { CheckVerificationFunction } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const VerificationPage = ({userId, userEmail}) => {

  const location = useLocation();
  const id = location.state.userId;
  const email = location.state.userEmail;

  console.log("User id:", id);
  console.log("User email:", email);

  const [verificationStatus, setVerificationStatus] = useState('');
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {

    checkVerification();

  }, []);

  const checkVerification = async () => {
    try {

      // Verify and activate the user
      await CheckVerificationFunction(email);

      // Update the verification status
      setVerificationStatus('Account verified successfully!');
      setStatus(true);

      // Navigate to profile setup
      navigate('/profilesetup', { state: { user: id } });

    } catch (error) {
      console.error('Error verifying account:', error.message);
      setVerificationStatus('Error verifying account. Please try again.');
    }
  };


  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {status ? (
        <div>
          <h3>{verificationStatus}</h3>
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
