import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
// import { Box, Link } from '@mui/material';
import { Backdrop, Box, CircularProgress, useMediaQuery } from '@mui/material';
import TextFields from '../Components/TextFields'
import Button, { ImageButton } from '../Components/Buttons'
// import { TextFieldPassword } from '../Components/TextFields';
// import SectionHeading from '../Components/SectionHeading';
import SectionSubHeading from '../Components/SectionSubHeading';
import { theme } from '../Theme/theme';
import { ProfileSetupFunction } from '../Services/AuthService';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function SetUpProfile({ setToProfileStatus }) {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state.userId;
    const userEmail = location.state.userEmail;

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
    const [open, setOpen] = React.useState(false);
    function handleImage(event) {
        const file = event.target.files[0];
        // var image = document.getElementById('image');
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            // console.log("Hello");
            setImageSrc(URL.createObjectURL(event.target.files[0]));
        };

        setImageStatus(true);
        setUserImage(file);
        console.log(file.size / 1024 / 1024);
    }

    async function setUpUser() {
        setOpen(true);
        const userId = userData;

        // console.log(userId, firstName, lastName, email, pNumber, userImage);

        if (userId && firstName && lastName && email && pNumber && userImage) {
            await ProfileSetupFunction(userId, firstName, lastName, email, pNumber, userImage).then(() => {
                setToProfileStatus(false);
                setOpen(false);
                navigate("/")
            })
        } else {
            // alert("Something went wrong.")

            if (!firstName) {
                setFirstNameErr(true);
                setFirstNameErrMsg("*input is required.")
                setOpen(false);
            } else {
                setFirstNameErr(false);
                setFirstNameErrMsg("")
            }

            if (!lastName) {
                setLastNameErr(true);
                setLastNameErrMsg("*input is required.")
                setOpen(false);
            } else {
                setLastNameErr(false);
                setLastNameErrMsg("")
            }

            if (!pNumber) {
                setPnumberErr(true);
                setPnumberErrMsg("*input is required.")
                setOpen(false);
            } else {
                setPnumberErr(false);
                setPnumberErrMsg("")
            }

            if (!userImage) {
                alert("Click on the icon to add a image")
                setOpen(false);
            }
        }

    }


    return (
        <>
            <div style={{ backgroundColor: '#B3B3B3', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <div style={{ maxWidth: '1440px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Paper elevation={3} style={{ padding: isSmallScreen ? "30px 20px" : '50px', width: isSmallScreen ? "85%" : '35%', height: 'auto', borderRadius: '10px', position: "relative" }}>

                        <Box sx={{ position: "absolute", right: isSmallScreen ? "20px" : "50px", top: isSmallScreen ? "20px" : "50px" }}>
                            <ImageButton handleImage={handleImage} imageSrc={imageSrc} />
                        </Box>
                        <div style={{
                            height: 'fit-content', paddingBottom: theme.spacing(4), paddingLeft: "10px"
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default SetUpProfile

{/* <Button component="label" variant="contained" sx={{ width: "100%", height: "100%", borderRadius: "100%", backgroundColor: "primary.light", backgroundImage: `url(${imageSrc})`, backgroundSize:"cover", backgroundPosition:"center" }}>
                            <VisuallyHiddenInput sx={{ zIndex: "50", width:"100%", height:"100%" }} type="file" onChange={event => handleImage(event)} />
                        </Button>
                        <Box sx={{ width: "30px", height: "30px", backgroundColor: "primary.light", borderRadius: "100%", position: "absolute", right: "5px", bottom: "-5px" }} >
                            <AddCircleIcon sx={{ color: "#fff", width: "94%", height: "94%", marginLeft: "4%", marginTop: "4%" }} />
                        </Box> */}