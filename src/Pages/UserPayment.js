import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Button, Link, Typography, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextFields from '../Components/TextFields';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';




function UserPayment() {

    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");

    return (
        <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >

            <div style={{ maxWidth: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Paper elevation={3} style={{ height: 'auto', borderRadius: '10px', width: '80vh' }}>
                    <AppBar position="static" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: '#396781', height: '90px' }}>
                        <Toolbar sx={{ display: 'flex', flexDirection: 'row', lignItems: 'center', justifyContent: 'center', paddingTop: '10px',  }}>
                        <Typography variant='h4' sx={{fontWeight: 'bold'}} >
                                Payment Method.
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ padding: '30px' }}>
                        <Box sx={{ marginBottom: '15px' }}>
                            <TextFields errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                            <TextFields errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', mb: '15px' }}>
                            <TextFields errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                            <TextFields errorStatus={emailErr} errorMessage={emailErrMsg} setState={setEmail} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', lignItems: 'center', justifyContent: 'center', marginTop: '20px', paddingBottom: '30px', gap: '26px' }}>
                        <Box >
                            <Button variant="outlined" sx={{ color: 'green', borderRadius:'30px',width:'130px',gap:'12px'}} >Pay <CheckCircleOutlineSharpIcon /></Button>
                        </Box>
                        <Box >
                            <Button variant="outlined" sx={{ color: 'red',  borderRadius:'30px',width:'130px' ,gap:'12px'}}>Cancel<CloseSharpIcon /></Button>
                        </Box>
                    </Box>
                </Paper>
            </div>
        </div>
    )
}

export default UserPayment
