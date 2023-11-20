// ActivationPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HomePage = () => {

   
    const navigate = useNavigate();

    const handleVerify =()=>{
        navigate('/verification');
    }
    
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5>You need verify your account on your email! </h5>
           <Link onClick={handleVerify}>Verify account</Link>
        </div>
    );
};

export default HomePage;
