
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Link, useMediaQuery, Backdrop, CircularProgress } from '@mui/material';
import TextFields from '../Components/TextFields'
import Button from '../Components/Buttons'
import { TextFieldPassword } from '../Components/TextFields';
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import { ForgotPasswordFunction } from '../Services/AuthService';

function ForgotPassword() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);


    const primaryMainColor = theme.palette.primary.main;
    const [open, setOpen] = React.useState(false);
    const handleForgotPassword = async () => {
        setOpen(true);
        try {
            await ForgotPasswordFunction(email);
            // alert("You will recieve a reset password link in your email if provided email is recognized.")
            setOpen(false);
            navigate('/signin'); // Navigate to sign in page
        } catch (error) {
            console.log("Unable to update password:", error);
        }
    };


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
                            <SectionSubHeading children={"Forgot Password"} />
                        </div>
                        <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(isSmallScreen ? 4 : 3) }}>
                            <TextFields label={"Email Address:"} errorStatus={emailErr} errorMessage={"Field Required!"} setState={setEmail} />
                        </Box>
                        <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                            <Button text={"Submit"} buttonFunction={handleForgotPassword} />
                            <p style={{ color: primaryMainColor, paddingLeft: theme.spacing(3), width: isSmallScreen ? '90%' : '70%', textAlign: "center", fontSize: isSmallScreen ? "14px" : "16px" }}> You will recieve a reset password link in your email if provided email is recognized.</p>
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

export default ForgotPassword
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import env from 'react-dotenv';
// import { Link } from 'react-router-dom';
// import { ForgotPasswordFunction } from '../Services/AuthService';


// const ForgotPassowrd = () => {
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate();


//     const handleForgotPassword = async () => {

//         try {
//             await ForgotPasswordFunction(email);
//             alert("Password updated successfully.")
//             navigate('/'); // Navigate to sign in page
//         } catch (error) {
//             console.log("Unable to update password:", error);
//         }
//     };


//     return (
//         <div>
//             <h2>Forgot Passord</h2>
//             <label>Enter Email: <br></br>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <br />
//             <br></br>
//             <button onClick={handleForgotPassword}>Change Password</button>
//             <br></br>
//         </div>
//     );
// };

// export default ForgotPassowrd;