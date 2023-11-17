import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Link } from '@mui/material';
import TextFields from '../Components/TextFields'
import Button, { ImageButton } from '../Components/Buttons'
import { TextFieldPassword } from '../Components/TextFields';
import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';
import { ProfileSetupFunction } from '../Services/AuthService';
import { useLocation } from 'react-router-dom';

function SetUpProfile({ user }) {
    const location = useLocation();
    const userData = location.state.user;
    const userEmail = location.state.email;

    const [email, setEmail] = useState(userEmail);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pNumber, setPnumber] = useState("");
    const [userId, setUserId] = useState(userData);

    const [emailErr, setEmailErr] = useState(false);
    const [firstNameErr, setFirstNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);
    const [pNumberErr, setPnumberErr] = useState(false);

    const [firstNameErrMsg, setFirstNameErrMsg] = useState(false);
    const [lastNameErrMsg, setLastNameErrMsg] = useState(false);
    const [pNumberErrMsg, setPnumberErrMsg] = useState(false);

    const [imageStatus, setImageStatus] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [userImage, setUserImage] = useState(null);

    function handleImage(event) {
        const file = event.target.files[0];
        // var image = document.getElementById('image');
        setImageSrc(URL.createObjectURL(event.target.files[0]));
        setImageStatus(true);
        setUserImage(file);
        console.log(file.name);
    }

    async function setUpUser() {
        const userId = userData;

        // console.log(userId, firstName, lastName, email, pNumber, userImage);

        if (userId && firstName && lastName && email && pNumber && userImage) {
            // ProfileSetupFunction(userId, firstName, lastName, email, pNumber, userImage);
        } else {
            // alert("Something went wrong.")

            if (!firstName) {
                setFirstNameErr(true);
                setFirstNameErrMsg("*input is required.")
            } else {
                setFirstNameErr(false);
                setFirstNameErrMsg("")
            }

            if (!lastName) {
                setLastNameErr(true);
                setLastNameErrMsg("*input is required.")
            } else {
                setLastNameErr(false);
                setLastNameErrMsg("")
            }

            if (!pNumber) {
                setPnumberErr(true);
                setPnumberErrMsg("*input is required.")
            } else {
                setPnumberErr(false);
                setPnumberErrMsg("")
            }

            if (!userImage) {
                alert("Click on the icon to add a image")
            }
        }

    }


    return (
        <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <div style={{ maxWidth: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Paper elevation={3} style={{ padding: '50px', width: '35%', height: 'auto', borderRadius: '10px', position: "relative" }}>
                    <Box sx={{ position: "absolute", right: "50px", top: "50px" }}>
                        <ImageButton handleImage={handleImage} imageSrc={imageSrc} />
                    </Box>
                    <div style={{
                        height: 'fit-content', paddingBottom: theme.spacing(4)
                    }}>
                        <SectionSubHeading children={"Profile"} /> <Box >
                        </Box>
                        <SectionSubHeading children={"Lets setup your profile"} />
                    </div>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFields label={"First Name:"} errorStatus={firstNameErr} errorMessage={firstNameErrMsg} setState={setFirstName} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFields label={"Last Name:"} errorStatus={lastNameErr} errorMessage={lastNameErrMsg} setState={setLastName} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFields label={"Phone Number:"} errorStatus={pNumberErr} errorMessage={pNumberErrMsg} setState={setPnumber} />
                    </Box>
                    <Box style={{ padding: theme.spacing(3), paddingTop: theme.spacing(3) }}>
                        <TextFields label={"Email Address:"} placeholder={email} errorStatus={emailErr} errorMessage={"disabled"} setState={setEmail} disabled={true} />
                    </Box>

                    <Box style={{ paddingTop: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
                        <Button text={"Submit"} buttonFunction={setUpUser} />
                    </Box>

                </Paper>
            </div>
        </div>
    )
}

export default SetUpProfile
