import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../Components/Buttons';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/Images/parabola.jpg';
import SectionHeading from '../Components/SectionHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import userpicture from '../Assets/Images/user.jpg';
import TextFields from '../Components/TextFields';
import { SigninFunction } from '../Services/AuthService';
import { theme } from '../Theme/theme';
// import { useNavigate } from "react-router-dom";
import { UserButton } from '../Components/Buttons'

function UserPage() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");

    // const handleSignIn = async () => {
    //     try {
    //         if (!email) {
    //             setEmailErr(true)
    //             setEmailErrMsg("Email address is required!");
    //         } else {
    //             setEmailErr(false);
    //             setEmailErrMsg("");
    //         }

    //         if (!password) {
    //             setPasswordErr(true);
    //             setPasswordErrMsg("Password is required!");
    //         } else {
    //             setPasswordErr(false);
    //             setPasswordErrMsg("");
    //         }

    //         if (email && password) {
    //             const user = await SigninFunction(email, password)
    //             console.log('User signed in:', user);
    //             if (user !== undefined) {
    //                 navigate("home")
    //             }
    //         }

    //     } catch (error) {
    //         console.log("Unable to log in:", error);
    //     }

    // };

    return (
        <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', marginTop: '30px', padding: '20px', width: "96%", margin: "-100px 2% 2% 2%" }}>
            <Box sx={{ width: isSmallScreen ? '90%' : "30%", height: "700px", backgroundColor: '#E3ECF1', position: 'relative', paddingBottom: "10px", borderRadius: '20px' }}>

                <img
                    style={{ height: "60%", width: "100%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                    src={userpicture} alt='card' />

                <CardContent sx={{ margin: '10px', position: "relative", height: "40%" }}>
                    <Typography variant='h5' sx={{ color: '#396781', fontWeight: 'bold', width: "100%", textAlign: "center" }}>
                        First & Last Name
                    </Typography>
                    <Typography variant='body1' sx={{ width: "100%", textAlign: "center" }}>
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Box sx={{ marginTop: "80px" }}>
                        <Box sx={{ margin: "10px 0", width: "100%" }}>
                            <UserButton text={"SUBSCRIBE"} />
                        </Box>
                        <Box sx={{ margin: "10px 0", width: "100%" }}>
                            <UserButton text={"BECOME A TUTOR"} />
                        </Box>
                    </Box>
                </CardContent>
            </Box >

            <Box sx={{ width: "70%", zIndex:"50",height: 'inherit' }} >
                <Box sx={{  backgroundColor: '#E3ECF1',width: isSmallScreen ? '100%' : '94%', height: '100%',margin:"0 3%", borderRadius: '16px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2%', borderBottom: '2px solid #396781', width:"94%", margin:"20px 3%", paddingTop:"20px" }}>
                        <Typography variant='h5' sx={{fontWeight:"bold", color: "primary.light", width:"29%", textAlign:"center"}}>Account</Typography>
                        <Typography variant='h5' sx={{fontWeight:"bold", color: "primary.light", width:"29%", textAlign:"center"}}>Courses</Typography>
                        <Typography variant='h5' sx={{fontWeight:"bold", color: "primary.light", width:"29%", textAlign:"center"}}>Tutor Sessions</Typography>
                    </Box>
                    <Box sx={{ paddingTop: '50px', gap: '15px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', mb: '15px' }}>
                            <TextFields label={"First name:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                            <TextFields label={"Last Name:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                        </Box>
                        <Box sx={{ marginBottom: '15px' }}>
                            <TextFields label={"Phone Number:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                            <TextFields label={"Email Address:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                        </Box>
                        <Typography sx={{ mb: '15px' }} >
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Box sx={{ position: 'absolute', bottom: -55, left: 380, padding: '10px', }}>
                            {/* <ToUserButton text={"UPDATE"} /> */}
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Grid>
    )
}

export default UserPage