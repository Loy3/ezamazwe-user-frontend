import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Link, Typography, useMediaQuery, Backdrop, CircularProgress } from '@mui/material';
import TextFields from '../Components/TextFields'
import Button from '../Components/Buttons'
import { TextFieldPassword } from '../Components/TextFields';
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { GetUserDataFunction, SigninFunction, UpdateUserSubscriptionFunction } from '../Services/AuthService';
import { theme } from '../Theme/theme';
import { useNavigate } from "react-router-dom";

function SignIn() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");
    const [open, setOpen] = React.useState(false);

    const [subscription_end_date, setSubscriptionEndDate] = useState('');
    let userId = '';

    const handleSignIn = async () => {
        setOpen(true);
        try {
            if (!email) {
                setEmailErr(true)
                setEmailErrMsg("Email address is required!");
                setOpen(false);
            } else {
                setEmailErr(false);
                setEmailErrMsg("");
            }

            if (!password) {
                setPasswordErr(true);
                setPasswordErrMsg("Password is required!");
                setOpen(false);
            } else {
                setPasswordErr(false);
                setPasswordErrMsg("");
            }

            if (email && password) {
                const user = await SigninFunction(email, password)
                // console.log('User signed in:', user);
                setOpen(false);
                if (user !== undefined) {
                    const user_id = user.uid;
                    await handleGetUserData(user_id).then(() => {
                        setOpen(false);
                        navigate("/")
                    })
                }
            }
        } catch (error) {
            console.log("Unable to log in:", error);
        }

    };

    const handleGetUserData = async (user_id) => {

        try {
            const user = await GetUserDataFunction(user_id);

            if (user) {
                // console.log("User data fetched on signin component", user);
                setSubscriptionEndDate(user.subscriptionEndDate);
                updateSubscriptionStatus(user_id, user.subscriptionEndDate);
            }

            // console.log("subscriptionEndDate:", subscription_end_date);

        } catch (error) {
            console.log("Error fetching data on signin component", error);
        }
    }


    const updateSubscriptionStatus = async (user_id, subscription_end_dat) => {
        // console.log("Subscription end date:", subscription_end_dat);

        try {

            await UpdateUserSubscriptionFunction(user_id, subscription_end_dat);

        } catch (error) {

            console.log("Error updating subscription status:", error);
        }
    }

    return (
        <>
            <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <div style={{ maxWidth: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Paper elevation={3} style={{ padding: isSmallScreen ? "30px 20px" : '50px', width: isSmallScreen ? "85%" : '35%', height: 'auto', borderRadius: '10px' }}>
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'fit-content',
                        }}>
                            <Box style={{ paddingBottom: theme.spacing(isSmallScreen ? 3 : 4) }}>
                                <SectionHeading children={"EZAMAZWE EDUTECH"} /></Box>
                            <SectionSubHeading children={"Sign in to your account"} />
                        </div>
                        <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(isSmallScreen ? 4 : 3) }}>
                            <TextFields label={"Email Address:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                        </Box>
                        <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                            <TextFieldPassword label={"Password:"} errorStatus={passwordErr} errorMessage={passwordErrMsg} setState={setPassword} isSignin={true} />
                        </Box>

                        <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                            <Button text={"Sign In"} buttonFunction={handleSignIn} />

                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography sx={{ fontSize: isSmallScreen ? "14px" : "16px" }}>Don't have an account?</Typography>
                                <Link href="signup" sx={{ marginLeft: "5px", fontSize: isSmallScreen ? "14px" : "16px" }}> Sign Up</Link>
                            </Box>

                        </Box>

                    </Paper>
                </div>
            </div>
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </>
    )
}

export default SignIn