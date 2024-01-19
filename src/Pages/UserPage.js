import React, { useState, useEffect, useMemo } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button, { SignOutButton, SmallButton, ToUserButton } from '../Components/Buttons';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/Images/parabola.jpg';
import SectionHeading from '../Components/SectionHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, useMediaQuery, Link, Backdrop, CircularProgress } from '@mui/material';
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

import capsImg1 from "../Assets/Images/cardsImages/caps1.jpg";
import entImg2 from "../Assets/Images/cardsImages/ent2.jpg";
import iebImg3 from "../Assets/Images/cardsImages/ieb3.jpg";
import { CourseContCard, UserCourseContCard } from '../Components/Cards';
import { PaymentFunction } from '../Services/CourseService';
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";

function UserPage({ signInUser }) {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [imageName, setImageName] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [userId, setUserId] = useState('');
    const [userCourses, setUserCourses] = useState([]);
    // const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

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
            setImageURL(user.image.imageURL);
            setImageName(user.image.imageName)

        } catch (error) {
            console.log("Error fetching data on EditProfile component", error);
        }
    }
    const userCoursesCards = useMemo(() => {
        return [
            {
                courseName: "Intro to Geometry",
                courseType: "Free",
                shortDescrip: short,
                cardImage: capsImg1,
                type: "caps"
            },

            {
                courseName: "Intro to Calculus",
                courseType: "Free",
                shortDescrip: short,
                cardImage: iebImg3,
                type: "ieb"
            },

            {
                courseName: "Intro to finance",
                courseType: "Free",
                shortDescrip: short,
                cardImage: entImg2,
                type: "ent"
            },

        ]
    }, [])

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
        setOpen(true);

        try {
            // if (!firstName || !lastName || !userEmail || !phoneNum) {
            //     return alert('Warning', 'All fields are required!');
            // }
            var fName = firstName;
            var lName = lastName;
            var emailA = email;
            var phNum = phoneNum;
            var userId = signInUser.user_id
            var imageUrl = imageURL;
            var role = signInUser.role;
            var subscription = signInUser.subscription;

            // console.log(userId, fName, lName, emailA, phNum, imageUrl, role, subscription);


            await ProfileUpdateFunction(userId, fName, lName, emailA, phNum, imageUrl, role, subscription, imageName);
            setOpen(false);
            window.location.reload();
        } catch (error) {
            console.log("Unable to update profile", error);
        }
    };
    const withBorder = "4px solid #396781";
    const withNoBorder = "none";
    const [accBorder, setAccBorder] = useState(withBorder);
    const [couBorder, setCouBorder] = useState(withNoBorder);
    const [tutBorder, setTutBorder] = useState(withNoBorder);
    const [accStatus, setAccStatus] = useState(true);
    const [couStatus, setCouStatus] = useState(false);
    const [tutStatus, setTutStatus] = useState(false);
    function userNavigate(type) {
        console.log("hello");

        switch (type) {
            case "account":
                setAccBorder(withBorder);
                setCouBorder(withNoBorder);
                setTutBorder(withNoBorder);

                setAccStatus(true);
                setCouStatus(false);
                setTutStatus(false);
                break;

            case "courses":
                setAccBorder(withNoBorder);
                setCouBorder(withBorder);
                setTutBorder(withNoBorder);

                setAccStatus(false);
                setCouStatus(true);
                setTutStatus(false);
                break;

            case "tutors":
                setAccBorder(withNoBorder);
                setCouBorder(withNoBorder);
                setTutBorder(withBorder);

                setAccStatus(false);
                setCouStatus(false);
                setTutStatus(true);
                break;
            default:
        }

    }

    async function becomeSubscribedUser() {
        PaymentFunction(firstName, lastName, email, phoneNum);
    }

    function signOut() {
        auth.signOut().then(() => {
            console.log("Success");
        }).catch((error) => {
            console.log(error.message);
            navigate("/")
        });

        window.location.reload();
    }


    return (
        <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', marginTop: '30px', padding: '20px', width: "96%", margin: isSmallScreen ? "-30vh 2% 2% 2%" : "-150px 2% 2% 2%" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: isSmallScreen ? '100%' : "30%", height: "700px", backgroundColor: '#E3ECF1', position: 'relative', borderRadius: '20px' }}>

                <img
                    style={{ height: isMediumScreen ? "55%" : "60%", width: "100%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                    src={imageURL} alt='card' />

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingX: "20px" }}>
                    <Box sx={{ marginTop: "20px"}}>
                        <Typography variant='h5' sx={{ color: '#396781', fontWeight: 'bold', width: "100%", textAlign: "center" }}>
                            {`${firstName} ${lastName}`}
                        </Typography>
                        <Typography variant='body1' sx={{ width: "100%", textAlign: "center" }}>
                            Lorem ipsum dolor sit amet
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '100%', maxWidth: '200px'}}>
                        <form action="https://ezamazwe-edutech-nodejs.onrender.com/payment" method="post">

                            <input type="hidden" name="email_address" value={email} />
                            <input type="hidden" name="name_first" value={firstName} />
                            <input type="hidden" name="name_last" value={lastName} />
                            <input type="hidden" name="cell_number" value={phoneNum} />
                            <input type="hidden" name="Card Name" value={`${firstName} ${lastName}`} />

                            <input type="hidden" name="Card Number" value={"0000000000000000000"} />
                            <input type="hidden" name="Expiry Date" value={"05/28"} />
                            <input type="hidden" name="Secure Code" value={"066"} />
                            <input type="hidden" name="Amount" value={"300"} />

                            <Box sx={{ margin: "10px 0", width: "100%" }}>
                                <UserButton type={"submit"} text={"SUBSCRIBE"} buttonFunction={becomeSubscribedUser} />
                            </Box>
                        </form>

                        <Box sx={{ margin: "10px 0", width: "100%", marginBottom: "40px" }}>
                            <UserButton text={"BECOME A TUTOR"} />
                        </Box>
                    </Box>
                </Box>
            </Box >

            <Box sx={{ width: isSmallScreen ? "100%" : "70%", zIndex: "50", height: isSmallScreen ? "auto" : 'inherit', position: "relative", }} >
                <Box sx={{ backgroundColor: '#E3ECF1', width: isSmallScreen ? '100%' : '97%', height: '100%', margin: isSmallScreen ? "0" : "0 0 0 3%", borderRadius: '16px', paddingBottom: "10px", marginTop: "-20px", paddingBottom: "0" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2%', borderBottom: '2px solid rgba(57, 103, 128, 0.30)', width: "94%", height: "60px", margin: "20px 3%", }}>
                        <Box sx={{ width: "29%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <Typography variant={isMediumScreen ? "subtitle2" : 'h5'} sx={{ fontWeight: "bold", padding: "0 15px", color: "primary.light", cursor: "pointer", borderBottom: `${accBorder}`, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }} onClick={() => userNavigate("account")}>Account</Typography>
                        </Box>
                        <Box sx={{ width: "29%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <Typography variant={isMediumScreen ? "subtitle2" : 'h5'} sx={{ fontWeight: "bold", padding: "0 15px", color: "primary.light", cursor: "pointer", borderBottom: `${couBorder}`, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }} onClick={() => userNavigate("courses")}>Courses</Typography>
                        </Box>
                        <Box sx={{ width: "29%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <Typography variant={isMediumScreen ? "subtitle2" : 'h5'} sx={{ fontWeight: "bold", padding: "0 15px", color: "primary.light", cursor: "pointer", borderBottom: `${tutBorder}`, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }} onClick={() => userNavigate("tutors")}>Tutor Sessions</Typography>
                        </Box>
                    </Box>
                    {accStatus ?
                        <Box style={{ display: 'flex', flex: 1, height: 'calc(100% - 80px)', flexDirection: "column", justifyContent: "space-between", }}>
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

                                <Box style={{ display: "flex", paddingTop: "10px" }}>
                                    <Link href="reset" style={{ alignSelf: "auto", marginLeft: "auto", textAlign: "right", cursor: "pointer", fontSize: isSmallScreen ? "14px" : "18px", fontWeight: "400", paddingTop: "5px", paddingBottom: "5px" }}>
                                        Reset Password
                                    </Link>
                                </Box>

                            </Box>
                            <Box sx={{ marginBottom: "40px", width: "90%", alignSelf: 'center' }}>
                                <Box sx={{ display: 'flex', width: "100%", flexDirection: 'row', justifyContent: "space-between" }}>
                                    <SmallButton text={"UPDATE"} buttonFunction={handleUpdate} />
                                    <SignOutButton text={"Sign Out"} buttonFunction={signOut} />
                                </Box>
                            </Box>
                        </Box>
                        : null
                    }

                    {couStatus ?
                        <>
                            <Box sx={{ paddingTop: '50px', gap: '15px', width: "90%", margin: "5%", position: "relative", display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>
                                {/* {userCoursesCards.map((course, index) => (
                                    <Box key={index} sx={{ width: isSmallScreen ? "100%" : "33%", }}>
                                        <UserCourseContCard courseName={course.courseName} courseType={course.courseType} shortDescrip={course.shortDescrip} image={course.cardImage} />
                                    </Box>
                                ))} */}
                                <Typography variant='body1' sx={{ fontStyle: "italic" }}>No courses.</Typography>
                            </Box>
                        </>
                        : null
                    }


                    {tutStatus ?
                        <>
                            <Box sx={{ paddingTop: '50px', gap: '15px', width: "90%", margin: "5%", position: "relative", display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>

                                <Typography variant='body1' sx={{ fontStyle: "italic" }}>No Sessions.</Typography>
                            </Box>
                        </>
                        : null
                    }
                </Box>
            </Box>

            <div>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>

        </Grid>
    )
}

export default UserPage