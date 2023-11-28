// ActivationPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../Services/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { SignOutFunction } from '../Services/AuthService';


const HomePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check the user's authentication status
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }
        });
    }, []);

    const handleSignOut =async()=>{
        try{
            await SignOutFunction();
            //After successfully signing out, redirect to signin page
            navigate('/signin');

        } catch (error) {
            console.log("Error signing out", error);
        }
    }

    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
            <Link to='/verifyemail'>Verify account</Link>
            <br></br>
            <br></br>
            <button onClick={() => { navigate('/courses') }}>View Courses</button>
            <br></br>
            <br></br>
            <Link to='/contactus'>Contact Us</Link>
            <br></br>
            <br></br>
            <Link to='/aboutus'>About Us</Link>
            <div>
                {user ? (
                    <div>
                        <br></br>
                        <Link to='/userpage'>Profile</Link>
                        <br></br>
                        <br></br>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <Link to='/signin'>Sign In</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
