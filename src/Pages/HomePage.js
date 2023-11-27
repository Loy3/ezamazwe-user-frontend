// ActivationPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', marginTop:'50px' }}>

            <h5>You need verify your account on your email! </h5>
            <Link to='/verifyemail'>Verify account</Link>
            <br></br>
            <br></br>
            <button onClick={()=>{navigate('/courses')}}>View Courses</button>
            <br></br>
            <br></br>
            <Link to='/userpage'>User Page</Link>
            <br></br>
            <br></br>
            <Link to='/contactus'>Contact Us</Link>  
            <br></br>
            <br></br>
            <Link to='/aboutus'>About Us</Link>
        </div>
    );
};

export default HomePage;
