import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../Components/Buttons';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/parabola.jpg'
import SectionHeading from '../Components/SectionHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import userpicture from '../Assets/user.jpg'
import TextFields from '../Components/TextFields';
import { SigninFunction } from '../Services/AuthService';
import { theme } from '../Theme/theme';
import { useNavigate } from "react-router-dom";
import ToUserButton from '../Components/Buttons'

function UserPage() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

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
                if (user !== undefined) {
                    navigate("home")
                }
            }

        } catch (error) {
            console.log("Unable to log in:", error);
        }

    };

    return (
        <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', marginTop: '300px', padding: '20px', }}>
            <Grid item xs={12} md={6}>
                <Card sx={{ width: isSmallScreen ? '90%' : 300, height: 750, backgroundColor: '#E3ECF1', position: 'relative', paddingBottom: "50px",borderRadius: '26px' }}>

                    <img
                        style={{ height: "60%", width: "100%", objectFit: "cover" }}
                        src={userpicture} alt='card' />

                    <CardContent sx={{ margin: '10px', }}>
                        <Typography variant='h5' sx={{ color: '#396781', fontWeight: 'bold', }}>
                            First & Last Name
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Box sx={{ paddingTop: '85px', }}>
                            <Box sx={{ margin: "10px 0", }}>
                                <ToUserButton text={"SUBSCRIBE"} sx={{ width: '100%', }} />
                            </Box>
                            <Box sx={{ margin: "10px 0" }}>
                                <ToUserButton text={"BECOME A TUTOR"}  />
                            </Box>
                        </Box>
                    </CardContent>
                </Card >
            </Grid>

            <Grid item sx={{ padding: isSmallScreen ? '20px' : '46px' }} >
                <Paper elevation={0}  sx={{ backgroundColor: '#E3ECF1', paddingLeft: isSmallScreen ? '10px' : '20px', paddingTop: '70px', width: isSmallScreen ? '100%' : '150%', height: '95%',padding: isSmallScreen ? '20px':'45px',borderRadius: '16px'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', margin: '10px', gap: '100px', borderBottom: '2px solid #396781'}}>
                        <SectionHeading children={'Account'} />
                        <SectionHeading children={'Courses'} />
                        <SectionHeading children={'Tutor Sessions'} />
                    </Box>
                    <Box sx={{paddingTop:'50px',gap:'15px'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px',mb: '15px' }}>
                            <TextFields label={"First name:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                            <TextFields label={"Last Name:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                        </Box>
                        <Box sx={{ marginBottom: '15px'}}>
                        <TextFields label={"Phone Number:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail}  />
                        <TextFields label={"Email Address:"} errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail}  />
                        </Box>
                        <Typography sx={{ mb: '15px'}} >
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Box  sx={{ position: 'absolute', bottom: -55, left: 380, padding: '10px', }}>
                        <ToUserButton text={"UPDATE"} />
                        </Box>
                    </Box>

                </Paper>
            </Grid>

        </Grid>
    )
}

export default UserPage