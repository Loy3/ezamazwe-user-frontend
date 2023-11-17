import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box,} from '@mui/material';
import Button from '../Components/Buttons'
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';
import { TextFieldPassword } from '../Components/TextFields';

function Reset() {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [emailErr, setEmailErr]= useState(false);
    const [passwordErr, setPasswordErr]= useState(false);
    
    
    function testingFunc() {
        if (!email ) {
            setEmailErr(true)
        }else{
            setEmailErr(false)
        }
    
        if (!password ) {
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
      }

  return (
    <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <div style={{maxWidth:'1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Paper elevation={3} style={{ padding: '50px', width: '35%', height: 'auto', borderRadius: '10px' }}>
                <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'fit-content',
                }}>
                <Box style={{  paddingBottom: theme.spacing(4) }}>
                <SectionHeading children={"EZAMAZWE EDUTECH"}  /></Box>
                <SectionSubHeading children={"Reset Password"}   />
                </div>
                <Box style={{  padding: theme.spacing(3),paddingTop:theme.spacing(3)}}>
                <TextFieldPassword label={" Current Password:"} errorStatus={passwordErr} errorMessage={"Field Required!"} setState={setPassword}  />
                </Box>
                <Box style={{  padding: theme.spacing(3),paddingTop:theme.spacing(3)}}>
                <TextFieldPassword label={" New Password:"} errorStatus={passwordErr} errorMessage={"Field Required!"} setState={setPassword}  />
                </Box>
                <Box style={{  padding: theme.spacing(3),paddingTop:theme.spacing(3)}}>
                <TextFieldPassword label={"Confirm Password:"} errorStatus={passwordErr} errorMessage={"Field Required!"} setState={setPassword}  />
                </Box>
                <Box style={{ paddingTop: theme.spacing(4), display:'flex',flexDirection:'column',alignItems:'center',gap:15}}>
                <Button text={"Reset"} buttonFunction={testingFunc} />
                </Box>
            </Paper>
            </div>
        </div>
  )
}

export default Reset
