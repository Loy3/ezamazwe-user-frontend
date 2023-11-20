import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import TextFields from '../Components/TextFields'
import Button from '../Components/Buttons'
import { TextFieldPassword } from '../Components/TextFields';
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';
import { SignupFunction } from '../Services/AuthService';
import { useNavigate } from "react-router-dom";

function SignUp({setToProfileStatus}) {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");

    useEffect(() => {
        handlePassword()
    }, [handlePassword])
    useEffect(() => {
        handleEmail()
    }, [handleEmail])

    //Validation
    function handlePassword() {
        let new_pass = password;

        // regular expressions to validate password
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var specialChar = /[!@#$%^&*]/g;
        if (new_pass) {
            if (!new_pass.match(lowerCase)) {
                setPasswordErr(true)
                setPasswordErrMsg("Password should contains at least 1 or more lowercase letter(s)!");
            } else if (!new_pass.match(upperCase)) {
                setPasswordErr(true)
                setPasswordErrMsg("Password should contain at least 1 or more uppercase letter(s)!");
            } else if (!new_pass.match(numbers)) {
                setPasswordErr(true)
                setPasswordErrMsg("Password should contains numbers also!");
            } else if (new_pass.length < 8) {
                setPasswordErr(true)
                setPasswordErrMsg("Password length should be more than 8.");
            } else if (!new_pass.match(specialChar)) {
                setPasswordErr(true)
                setPasswordErrMsg("Password should contain at least 1 special character (e.g. !@#$%^&*).");
            } else {
                setPasswordErrMsg("Password is strong!");
                setPasswordErr(false)
            }
        } else {
            setPasswordErr(false)
        }
    }
    function handleEmail() {
        let new_email = email;

        var emailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*/g;
        if (email) {
            if (!new_email.match(emailAddress)) {
                setEmailErr(true)
                setEmailErrMsg("Enter a required email address");
            } else {
                setEmailErrMsg("");
                setEmailErr(false)
            }
        } else {
            setEmailErrMsg("");
            setEmailErr(false)
        }
    }
    //Validation

    const handleSignup = async () => {
        // navigate('profilesetup', { state: { user: "scxIk6bUWMSngdL5CyzsUNYzZAS2", email: "loy@yahoo.com" } });
        try {
            const user = await SignupFunction(email, password);
            // console.log('User data in signup component:', user);

            const user_id = user.uid;
            // console.log('User id in signup component:', user_id);
            setToProfileStatus(true)
            navigate('verification', { state: { userId: user_id,  userEmail: email } });
            
            // navigate('profilesetup', { state: { user: user_id, email: email } });


        } catch (error) {
            console.error('Error during signup:', error.message);
        }
    };

    return (

        <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <div style={{ maxWidth: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Paper elevation={3} style={{ padding: isSmallScreen ? "30px 20px" : '50px', width: isSmallScreen ? "85%" : '35%', height: 'auto', borderRadius: '10px' }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'fit-content',
                    }}>
                        <Box style={{ paddingBottom: theme.spacing(isSmallScreen ? 3 : 4) }}>
                            <SectionHeading children={"EZAMAZWE EDUTECH"} /></Box>
                            <SectionSubHeading children={"Create you account"} />
                    </div>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(isSmallScreen ? 4 : 3) }}>
                        <TextFields label={"Email Address:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFieldPassword label={"Password:"} errorStatus={passwordErr} errorMessage={passwordErrMsg} setState={setPassword} isSignin={false} />
                    </Box>


                    <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                        <Button text={"Sign Up"} buttonFunction={handleSignup} />
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography sx={{ fontSize: isSmallScreen ? "14px" : "16px" }}>Already have an account?</Typography>
                            <Link href="/" sx={{ marginLeft: "5px", fontSize: isSmallScreen ? "14px" : "16px" }}> Sign In</Link>
                        </Box>
                    </Box>

                </Paper>
            </div>
        </div>
    )
}

export default SignUp