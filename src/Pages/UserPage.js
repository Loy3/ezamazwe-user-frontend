import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button, { SmallButton, ToUserButton } from '../Components/Buttons';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/Images/parabola.jpg';
import SectionHeading from '../Components/SectionHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, useMediaQuery, Link } from '@mui/material';
import userpicture from '../Assets/Images/user.jpg';
import { UserTextFields } from '../Components/TextFields';
import { SigninFunction } from '../Services/AuthService';
import { theme } from '../Theme/theme';
// import { useNavigate } from "react-router-dom";
import { UserButton } from '../Components/Buttons'
import { ProfileUpdateFunction } from '../Services/AuthService';
import { UploadImageFunction } from '../Services/AuthService';
import { GetUserDataFunction } from '../Services/AuthService';
// import { FetchUserCoursesFunction } from "../Services/CourseService";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";

function UserPage({ signInUser }) {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [userId, setUserId] = useState('');
    const [userCourses, setUserCourses] = useState([]);
    // const navigate = useNavigate();


    useEffect(() => {
        const user = signInUser;
        if (user) {
            setUserId(user.uid);
        } else {
            navigate('/')   // Navigate to signin page
        }
    }, []);

    useEffect(() => {

        handleGetUserData();
    }, []);


    // User information
    const handleGetUserData = async () => {
        try {
            const user = signInUser;
            // console.log("User data fetched on EditProfile component", user);
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setPhoneNum(user.phoneNum);
            // setImageURL(user.imageURL);

        } catch (error) {
            console.log("Error fetching data on EditProfile component", error);
        }
    }


    // // Courses 
    // const handleGetUserCourses = async () => {
    //     try {
    //         const courses = await FetchUserCoursesFunction(userId);
    //         setUserCourses(courses);

    //         console.log("User courses:", courses);

    //     } catch (error) {
    //         console.log("Error fetching user courses:", error);
    //         alert("Unable to fetch data.");
    //     }
    // }


    // Update
    const handleUpdate = async () => {
        try {
            // if (!firstName || !lastName || !userEmail || !phoneNum) {
            //     return alert('Warning', 'All fields are required!');
            // }
            var fName = firstName;
            var lName = lastName;
            var emailA = email;
            var phNum = phoneNum;
            var userId = signInUser.user_id
            var imageUrl = signInUser.image.imageURL;
            var role = signInUser.role;
            var subscription = signInUser.subscription;


            // console.log(userId, fName, lName, emailA, phNum, imageUrl, role, subscription);

            await ProfileUpdateFunction(userId, fName, lName, emailA, phNum, imageUrl, role, subscription);

        } catch (error) {
            console.log("Unable to update profile", error);
        }
    };


    return (
        <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', marginTop: '30px', padding: '20px', width: "96%", margin:isSmallScreen? "-30vh 2% 2% 2%": "-150px 2% 2% 2%" }}>
            <Box sx={{ width: isSmallScreen ? '100%' : "30%", height: "700px", backgroundColor: '#E3ECF1', position: 'relative', paddingBottom: "10px", borderRadius: '20px', marginBottom: isSmallScreen ? "30px" : "0" }}>

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

            <Box sx={{ width: isSmallScreen ? "100%" : "70%", zIndex: "50", height: isSmallScreen ? "auto" : 'inherit', position: "relative",  }} >
                <Box sx={{ backgroundColor: '#E3ECF1', width: isSmallScreen ? '100%' : '94%', height: '100%', margin: isSmallScreen?"0":"0 3%", borderRadius: '16px', paddingBottom: "10px", marginTop: "-20px",paddingBottom:isSmallScreen?"100px":"0" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2%', borderBottom: '2px solid #396781', width: "94%", margin: "20px 3%", paddingTop: "20px", paddingBottom: "15px" }}>
                        <Typography variant={isSmallScreen?"subtitle2":'h5'} sx={{ fontWeight: "bold", color: "primary.light", width: "29%", textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center"}}>Account</Typography>
                        <Typography variant={isSmallScreen?"subtitle2":'h5'} sx={{ fontWeight: "bold", color: "primary.light", width: "29%", textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center" }}>Courses</Typography>
                        <Typography variant={isSmallScreen?"subtitle2":'h5'} sx={{ fontWeight: "bold", color: "primary.light", width: "29%", textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center" }}>Tutor Sessions</Typography>
                    </Box>
                    <Box sx={{ paddingTop: '50px', gap: '15px', width: "90%", margin: "5%", position: "relative" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', mb: '15px' }}>
                            <UserTextFields label={"First name:"} setState={setFirstName} placeholder={`First Name: ${firstName}`} />
                            <UserTextFields label={"Last Name:"} setState={setLastName} placeholder={`Last Name: ${lastName}`} />
                        </Box>
                        <Box sx={{ marginBottom: '15px' }}>
                            <Box sx={{ marginTop: "10px" }}>
                                <UserTextFields label={"Phone Number:"} setState={setPhoneNum} placeholder={`Phone Number: ${phoneNum}`} />
                            </Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <UserTextFields label={"Email Address:"} setState={setEmail} disabled={true} placeholder={email} />
                            </Box>
                        </Box>

                        <Link href="reset" style={{ width: "100%", textAlign: "right", cursor: "pointer", fontSize: isSmallScreen ? "14px" : "16px", fontWeight: "400", }}>
                            Reset Password
                        </Link>

                    </Box>
                    <Box sx={{ position: 'absolute', bottom: "10px", left: "5%", padding: '10px', }}>
                        <SmallButton text={"UPDATE"} buttonFunction={handleUpdate} />
                    </Box>
                </Box>
            </Box>

        </Grid>
    )
}

export default UserPage