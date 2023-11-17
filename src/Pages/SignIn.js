import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Link } from '@mui/material';
import TextFields from '../Components/TextFields'
import Button from '../Components/Buttons'
import { TextFieldPassword } from '../Components/TextFields';
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { SigninFunction } from '../Services/AuthService';
import { theme } from '../Theme/theme';
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");

    const handleSignIn = async () => {
        try {
            if (!email) {
                setEmailErr(true)
                setEmailErrMsg("Email address is required!");
            } else {
                setEmailErr(false);
                setEmailErrMsg("");
            }

            if (!password) {
                setPasswordErr(true);
                setPasswordErrMsg("Password is required!");
            } else {
                setPasswordErr(false);
                setPasswordErrMsg("");
            }

            if (email && password) {
                const user = await SigninFunction(email, password)
                console.log('User signed in:', user);
               if(user !== undefined){
                 navigate("/land")
               }
            }

        } catch (error) {
            console.log("Unable to log in:", error);
        }

    };

    return (

        <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <div style={{ maxWidth: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Paper elevation={3} style={{ padding: '50px', width: '35%', height: 'auto', borderRadius: '10px' }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'fit-content',
                    }}>
                        <Box style={{ paddingBottom: theme.spacing(4) }}>
                            <SectionHeading children={"EZAMAZWE EDUTECH"} /></Box>
                        <SectionSubHeading children={"Sign in to your account"} />
                    </div>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFields label={"Email Address:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFieldPassword label={"Password:"} errorStatus={passwordErr} errorMessage={passwordErrMsg} setState={setPassword} isSignin={true}/>
                    </Box>

                    <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                        <Button text={"Sign In"} buttonFunction={handleSignIn} />

                        <Link href="SignUp">Don't have an account? Sign Up</Link>
                        </Box>

                </Paper>
            </div>
        </div>
    )
}

export default SignIn