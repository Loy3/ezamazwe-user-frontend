
import React from "react";
import { useState, useEffect } from 'react';
import { ProfileUpdateFunction } from '../Services/AuthService';
import { UploadImageFunction } from '../Services/AuthService';
import { GetUserDataFunction } from '../Services/AuthService';
import { FetchUserCoursesFunction } from "../Services/CourseService";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField, InputLabel, Link, Grid, Typography, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const UserPage = () => {

    const [userEmail, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    // const [imageURL, setImageURL] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [userId, setUserId] = useState('');
    const [userCourses, setUserCourses] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    let user = {};

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
        } else {
            navigate('/')   // Navigate to signin page
        }
    }, []);

    useEffect(() => {

        handleGetUserData();
    }, []);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleContinue = () => {
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("phoneNum:", phoneNum);

        navigate('/payment', {
            state: {
                firstName: firstName,
                lastName: lastName,
                phoneNum: phoneNum,
            }
        });
    }


    // User information
    const handleGetUserData = async () => {
        try {
            user = await GetUserDataFunction(userId);

            if (user) {
                console.log("User data fetched on Profile component", user);
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setEmail(user.email);
                setPhoneNum(user.phoneNum);
                // setImageURL(user.imageURL);
            }


        } catch (error) {
            console.log("Error fetching data on Profile component", error);
        }
    }


    // Courses 
    const handleGetUserCourses = async () => {
        try {
            const courses = await FetchUserCoursesFunction(userId);
            setUserCourses(courses);

            console.log("User courses:", courses);

        } catch (error) {
            console.log("Error fetching user courses:", error);
            alert("Unable to fetch data.");
        }
    }


    // Upload the image
    // const handleUploadImage = async () => {
    //     try {
    //         const image_url = await UploadImageFunction(imageUpload);
    //         setImageURL(image_url);
    //     } catch (error) {
    //         console.error("Error in UploadImageFunction:", error);
    //     }
    // };

    // Update
    const handleUpdate = async () => {
        try {
            if (!firstName || !lastName || !userEmail || !phoneNum) {
                return alert('Warning', 'All fields are required!');
            }
            ProfileUpdateFunction(userId, firstName, lastName, userEmail, phoneNum);

        } catch (error) {
            console.log("Unable to update profile", error);
        }
    };

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            {user ? (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginTop: '100px', marginLeft: '50px' }}>
                    <Button variant="outlined" color="primary" onClick={handleOpen}>
                        SUBSCRIBE
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        sx={{
                            borderRadius: '20px',
                        }}
                    >
                        <DialogTitle component='h1' variant='h4' sx={{ textAlign: 'center', mt: 3 }}>
                            Subscribe
                        </DialogTitle>
    
                        <DialogContent sx={{ height: '300px' }}>
    
                            <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px' }}>
                                Become a subscribed user.
                            </Typography>
    
                            <Typography sx={{ textAlign: 'center', mt: 0, mb: 2, fontWeight: 400, fontSize: '20px', lineHeight: '30px' }}>
                                To become a subscribed user a fee has to be
                                paid, so click on continue to make payment.
                            </Typography>
    
                        </DialogContent>
    
                        <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Button
                                    onClick={handleContinue}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 5, mb: 5,
                                        borderRadius: 30,
                                        backgroundColor: '#1C3F53',
                                        width: '300px',     // Default width for larger screens
                                        height: '55px',
                                        [theme.breakpoints.down('sm')]: {
                                            // Use 456px width on screens smaller or equal to 'sm' breakpoint
                                            width: '456px',
                                        },
                                    }}
                                >
                                    Continue
                                </Button>
                            </Box>
                        </DialogActions>
                    </Dialog>
                </div>
                <div style={{ marginTop: '100px', marginLeft: '50px' }}>
                    <br></br>
                    <h3> Profile</h3>
                    <br></br>
                    <br></br>
                    {/* <label>Insert Image: </label>
                <input
                    type="file"
                    onChange={(event) => setImageUpload(event.target.files[0])} />
                <button onClick={handleUploadImage}>Upload</button>
                <br></br>
                <br></br> */}
                    <input type="text" placeholder="Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Surname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="Phone" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                    <br></br>
                    <br></br>
                    <input type="email" placeholder="Email" value={userEmail} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <br></br>
                    <button onClick={handleUpdate}>UPDATE</button>
                    <br></br>
                </div>
    
                <div style={{ marginTop: '100px', marginLeft: '50px' }}>
                    <button onClick={handleGetUserCourses}><h3>Courses</h3></button>
                    <div>
                        {userCourses.map((course) => (
                            <li key={course.courseId}>
                                <strong>Course ID: </strong> {course.courseId} <br></br>
                                <strong>Course Name: </strong> {course.courseName} <br></br>
                                <strong># Complete lessons: </strong> {course.completeLessons.lessonId} <br></br>
                                <strong># Incomplete lessons: </strong> {course.uncompleteLessons.lessonId} <br></br>
                                <h3>__________________________________________</h3>
                            </li>
                        ))}
                    </div>
                </div>
    
            </div>
            ) : (
                <div>
                    <h3>Loading...</h3>
                </div>    
            )}
        </div>
        
    );
}
export default UserPage; 
