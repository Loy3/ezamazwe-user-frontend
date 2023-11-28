import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, useMediaQuery} from '@mui/material';
import Button from '../Components/Buttons'
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';
import { TextFieldPassword } from '../Components/TextFields';
import { ResetPasswordFunction } from '../Services/AuthService';
import { isPasswordValid } from '../Services/AuthService';
import { auth } from '../Services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const [currentPassword, setCurrentPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const user = auth.currentUser;
    const navigate = useNavigate();

    const [oldPasswordErr, setOldPasswordErr] = useState(false);
    const [oldPasswordErrMsg, setOldPasswordErrMsg] = useState("");

    const [newPasswordErr, setNewPasswordErr] = useState(false);
    const [newPasswordErrMsg, setNewPasswordErrMsg] = useState("");

    const [confrimPasswordErr, setConfrimPasswordErr] = useState(false);
    const [confrimPasswordErrMsg, setConfrimPasswordErrMsg] = useState("");

    const handleResetPassword = async () => {

        // Validate password complexity on the client side

        if (!currentPassword) {
            setOldPasswordErr(true);
            setOldPasswordErrMsg("*input is required.")
        } else {
            setOldPasswordErr(false);
            setOldPasswordErrMsg("")
        }

        if (!newPassword) {
            setNewPasswordErr(true);
            setNewPasswordErrMsg("*input is required.")
        } else {
            setNewPasswordErr(false);
            setNewPasswordErrMsg("")
        }

        if (!confirmPassword) {
            setConfrimPasswordErr(true);
            setConfrimPasswordErrMsg("*input is required.")
        } else {
            setConfrimPasswordErr(false);
            setConfrimPasswordErrMsg("")
        }

        if (currentPassword && newPassword && confirmPassword) {
            console.log(isPasswordValid(newPassword));
            if (isPasswordValid(newPassword) !== "Password is strong!") {
                // alert('Password does not meet complexity requirements.');
                setNewPasswordErr(true);
                setNewPasswordErrMsg(isPasswordValid(newPassword))
                return;
            } else {
                setNewPasswordErr(false);
                setNewPasswordErrMsg("")
            }

            if (newPassword !== confirmPassword) {
                setNewPasswordErr(true);
                setNewPasswordErrMsg("Passwords do not match")
                setConfrimPasswordErr(true);
                setConfrimPasswordErrMsg("Passwords do not match");

                // ?alert('Passwords entered do not match. Re-enter passwords.');
                return;
            } else {
                setNewPasswordErr(false);
                setNewPasswordErrMsg("")
                setConfrimPasswordErr(false);
                setConfrimPasswordErrMsg("");
                try {
                    await ResetPasswordFunction(user, currentPassword, newPassword).then(()=>{
                        navigate('');
                    })                   

                } catch (error) {
                    console.log("Error occured at reset password function:", error);
                }
            }
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
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFieldPassword label={"Current Password:"} errorStatus={oldPasswordErr} errorMessage={oldPasswordErrMsg} setState={setCurrentPassword} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFieldPassword label={"New Password:"} errorStatus={newPasswordErr} errorMessage={newPasswordErrMsg} setState={setNewPassword} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFieldPassword label={"Confirm Password:"} errorStatus={confrimPasswordErr} errorMessage={confrimPasswordErrMsg} setState={setConfirmPassword} />
                    </Box>
                    <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                        <Button text={"Reset"} buttonFunction={handleResetPassword} />
                    </Box>
                </Paper>
            </div>
        </div>
    )
}

export default ResetPassword