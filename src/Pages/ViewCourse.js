// import * as React from 'react';
import React, { useState, useEffect, useRef } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import parabola from '../Assets/Images/parabola.jpg';
import SectionSubHeading from '../Components/SectionSubHeading';
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import Label from '../Components/Label';
import { GetUserDataFunction } from "../Services/AuthService";
import Contentbutton from '../Components/ContentButton';
import { ContCard } from '../Components/Cards';
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";


function ViewCourse({ course_data, docData }) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    const isSecMediumScreen = useMediaQuery("(max-width:800px) and (min-width:600px)");
    const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    const location = useLocation();
    const courseData = location.state.course_data;
    const doc_data = location.state.docData;
    console.log("courseData", courseData);
    console.log("doc_data:", doc_data);

    const [courseId, setCourseId] = useState(courseData.id);
    const [courseTitle, setCourseTitle] = useState(courseData.courseName);
    const [courseDescription, setCourseDescription] = useState(courseData.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(courseData.courseFullDescription);
    const [costPrice, setCostPrice] = useState(courseData.coursePrice);
    const [courseType, setCourseType] = useState(courseData.courseType);
    const [learningOutcomes, setLearningOutcomes] = useState(courseData.learningOutcomes);
    const [video, setVideo] = useState(courseData.lessonUrl);
    const [userInfo, setUserInfo] = useState(null);
    const [userSubscription, setUserSubscription] = useState("");
    const [lessonName, setLessonName] = useState(courseData.lessonName);
    const videoRef = useRef(null);

    const user = auth.currentUser;
    let userId = '';
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            // Assign user id to userId
            userId = user.uid;

            // Fetch user data if user is authenticated
            userData();
        }
    }, [user]);

    useEffect(() => {
        // Check userSubscription once userInfo is available
        if (userInfo) {
            setUserSubscription(userInfo.subscription);
        }
    }, [userInfo]);

    const userData = async () => {
        try {
            const data = await GetUserDataFunction(userId);
            setUserInfo(data);
            console.log("userData:", data);
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    }


    const handleStartCourse = () => {
        console.log(courseType);
        if (user) {
            if (courseType === "Free") {
                navigate('/courseview', { state: { courseData: courseData, doc_data: doc_data } });
            } else {
                if (courseType === "Paid" && userSubscription === "subscribed") {
                    navigate('/courseview', { state: { courseData: courseData } });
                } else {
                    alert("Only subscribed users can access this course");
                    navigate('/courses');   // Navigate back to courses page
                }
            }
        } else {
            // Navigate to signin page
            navigate('/courses');
        }


        // if (user) {
        //     if (costPrice == "Free" || userSubscription == "subscribed") {
        //         navigate('/courseview', {
        //             state: {
        //                 courseData: courseData,
        //                 // doc_data: doc_data
        //             }
        //         });
        //     } else {
        //         alert("Only subscribed users can access this course");
        //         navigate('/courses');   // Navigate back to courses page
        //     }
        // } else {
        //     // Navigate to signin page
        //     navigate('/signin');
        // }
    }

    function toFullView() {
        navigate("/courseview")
    }
    return (
        <Grid sx={{ padding: isMediumScreen ? '0 20px' : '0 40px' }}>
            <Grid sx={{ display: 'flex', flexDirection: isMediumScreen ? 'column' : 'row', }}>
                <Box sx={{ width: isMediumScreen ? '100%' : "30%", backgroundColor: '#E3ECF1', position: 'relative', paddingBottom: "20px", height: isMediumScreen ? "660px" : "inherit", marginTop: isMediumScreen ? "-25vh" : "-60px", zIndex: "50", borderRadius: "20px" }}>

                    <img
                        style={{ height: isSecMediumScreen ? "58%" : "50%", width: "100%", objectFit: "cover", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
                        src={parabola} alt='card' />

                    <CardContent sx={{ margin: '10px' }}>
                        <Label children={courseTitle} />
                        {/* <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /> */}
                        <Box sx={{ marginTop: "30px" }}>
                            <Typography variant="body2" color="text.secondary">
                                {courseDescription}
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis. */}
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: "30px" }}>
                            <Label children={courseType} />
                        </Box>
                    </CardContent>
                    <Box sx={{ position: isMediumScreen ? "relative" : "absolute", bottom: "10px", width: "100%" }}>
                        <Contentbutton text={"START"} buttonFunction={handleStartCourse} />
                    </Box>
                </Box >
                <Grid sx={{ paddingLeft: isMediumScreen ? '0' : '20px', paddingTop: '70px', width: isMediumScreen ? "100%" : "70%", paddingBottom: "20px" }}>
                    <Box sx={{ width: "90%", margin: "0 5%" }}>
                        <Label children={"What you will learn?"} />
                        <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <ul className='list'>
                            {learningOutcomes.map((outcome, index)=>(
                            <li key={index}>{outcome}</li>
                            ))}
                        </ul>

                        <Box sx={{ paddingTop: '30px' }}>
                            <Label children={"Course Content"} />
                            <SectionSubHeading children={"Course Lessons."} />
                            <br></br>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={1} text={short} duration={"00:00"} />
                            </Box>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={2} text={short} duration={"00:00"} />
                            </Box>
                            <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={3} text={short} duration={"00:00"} />
                            </Box>
                            {/* <Box sx={{ margin: "10px 0" }}>
                                <ContCard lessonNumber={4} text={short} duration={"00:00"} />
                            </Box> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>


            <Box sx={{ paddingTop: '50px', }}>
                <Label children={'Description'} />
                <SectionSubHeading children={"A full description of the course."} sx={{ marginBottom: '30px' }} />
                <Typography variant="body1" paragraph sx={{ marginTop: '10px' }}>
                    {courseFullDescription}
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. */}

                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. */}
                </Typography>
            </Box>

            <Box sx={{ paddingTop: '80px' }}>
                <Label children={'Requirements'} />
                <SectionSubHeading children={"What's required for the course."} />
                <Typography variant="body1" paragraph>

                    <FormControl sx={{marginTop:"20px", marginBottom: "20px"}}>
                        <RadioGroup

                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Internet connection." control={<Radio />} label="Internet connection." />
                            <FormControlLabel value="Laptop or smart phone." control={<Radio />} label="Laptop or smart phone." />
                        </RadioGroup>
                    </FormControl>
                </Typography>
            </Box>
        </Grid>
    )
}

export default ViewCourse
