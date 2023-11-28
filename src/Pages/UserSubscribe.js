import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Typography, useMediaQuery } from '@mui/material';

import Button from '../Components/Buttons'

import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';

function UserSubscribe() {

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
                <Paper elevation={3} style={{ padding: isSmallScreen ? "30px 20px" : '50px', width: isSmallScreen ? "85%" : '35%', height: 'auto', borderRadius: '10px' }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'fit-content',
                    }}>
                        <Box style={{ paddingBottom: theme.spacing(isSmallScreen ? 3 : 4) }}>
                            <SectionHeading children={"Subscribe."} /></Box>
                        <SectionSubHeading children={"Become a subscribed user."} />
                    </div>
                    <Box sx={{marginTop:'20px', display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',  }}>
                    <SectionSubHeading children={" To become a subscribed user a fee has to be paid, so click on continue to make payment."} />
                    </Box>
                    <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                        <Button text={"Continue"}  />
                    </Box>

                </Paper>
            </div>
        </div>
    )
}

export default UserSubscribe