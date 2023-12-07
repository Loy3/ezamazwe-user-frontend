import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { Container, Grid, selectClasses, useMediaQuery, Button } from '@mui/material';
import video1 from "../Assets/Videos/1.mp4";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Label from '../Components/Label';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SectionSubHeading from '../Components/SectionSubHeading';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FooterComp } from '../Components/Footer';
import { CourseNavBar } from '../Components/NavBar';
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { CourseFullViewFunction, CourseTopicsFunction } from '../Services/CourseService';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function CourseFullView({ courseData }) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const location = useLocation();
    const course = location.state.courseData;
    console.log("View Full Course: ", course);

    const [courseId, setCourseId] = useState(course.id);
    const [courseTitle, setCourseTitle] = useState(course.courseName);
    const [courseDescription, setCourseDescription] = useState(course.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(course.courseFullDescription);
    const [subscription, setSubscription] = useState(course.coursePrice);
    const [video, setVideo] = useState("");
    const [lesson, setLesson] = useState(course.lessonName);
    const [lessons, setLessons] = useState([]);
    const user = auth.currentUser;
    const navigate = useNavigate();
    const [selectedLesson, setSelectedLesson] = useState()

    // Video declarations and options
    const videoRef = useRef(null);
    const videoSource = "https://firebasestorage.googleapis.com/v0/b/edutech-app-eecfd.appspot.com/o/courses%2F2.1%20React%20Native%20-%20Lesson%202%20-%20Creating%20a%20New%20Application.mp4?alt=media&token=91cba07f-7253-4b84-8441-76790a32bb93"
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const viewLesson = (topic) => {
        setSelectedLesson(topic)
        console.log("Selected lessons :", selectedLesson)
    }

    const handleVisitLink = (link) => {
        const composeUrl = link;
        // window.location.href = composeUrl;
        window.open(composeUrl, '_blank');
    };

    // useEffect(() => {
    //     getCourseLessons();
    // }, [])

    // async function getCourseLessons() {
    //     // console.log(course.id);
    //     try {
    //         const courseData = await CourseFullViewFunction(course.id);
    //         console.log("Courses data:", courseData);
    //         getCourseLessonTopics(courseData);
    //         // setLessons(courseData);

    //     } catch (error) {
    //         console.log("Error fetching data", error);
    //     }
    // }

    // async function getCourseLessonTopics(courseResData) {
    //     // console.log(course.id);
    //     setLessons([]);
    //     try {
    //         courseResData.forEach(async (crs) => {
    //             const courseRes = await CourseTopicsFunction(course.id, crs.id);
    //             setLessons(((prevData) => [...prevData, ...courseRes]));
    //         })
    //         setVideo(lessons[0].video)

    //     } catch (error) {
    //         console.log("Error fetching data", error);
    //     }
    // }


    return (
        <Box>

            {/* <Box sx={{ flexGrow: 1, backgroundColor: "#1C3F53", height: '100px' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Course Name
            </Typography>
            <Avatar sx={{ bgcolor: '#396781'[500] }}>M</Avatar>
          </Toolbar>
        </AppBar>
      </Box> */}
            {console.log("lessons", lessons)}
            <CourseNavBar courseName={courseTitle} />
            <Grid sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', width: "100%" }}>
                <Box sx={{ width: isSmallScreen ? "100%" : "75%", margin: "0", height: isSmallScreen ? "50vh" : "70vh", position: "relative" }}>
                    {/* <video style={{ width: "100%", height: "100%", objectFit: "cover" }} controls>
                        <source src={video ? video : video1} type="video/mp4" />
                    </video> */}

                    <video ref={videoRef} controls style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                        {selectedLesson && selectedLesson.video ? (
                            <source src={selectedLesson.video} type="video/mp4" />
                        ) : (
                            <p>No video available for the selected lesson.</p>
                        )}
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={handlePlayPause} style={{ width: isSmallScreen ? "50px" : "80px", height: isSmallScreen ? "50px" : "80px", borderRadius: "100%", outline: "none", border: "none", position: "absolute", top: "30px", left: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {isPlaying ? <PauseIcon sx={{ color: "primary.light", height:isSmallScreen? "30px": "50px", width: isSmallScreen? "30px":"50px" }} /> : <PlayArrowIcon sx={{ color: "primary.light", height:isSmallScreen? "30px": "50px", width: isSmallScreen? "30px":"50px" }} />}
                    </button>
                </Box>
                <Box sx={{ width: isSmallScreen ? "100%" : "25%", height: "auto" }}>
                    {course.lessons.map((lesson, index) => (
                        <Accordion key={index} sx={{ backgroundColor: '#E3ECF1', height: 'auto' }}>
                            <AccordionSummary
                                expandIcon={<ArrowLeftIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ width: "40%", margin: "0 5%", height: "100%", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>{`Lesson ${index + 1}`}</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <Typography sx={{ height: '100px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography> */}

                                {lesson.topics.map((topic, index) => (
                                    <div key={index}>
                                        <Button onClick={() => viewLesson(topic)} >
                                            {topic.topicName}
                                        </Button>
                                    </div>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                   
                </Box>
            </Grid>

            <Box sx={{ width: "90%", margin: "100px 5%" }}>
                <Label children={"Course Overview"} />
                <Typography  variant={isSmallScreen?"body2":"subtitle1"} sx={{marginBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                <Box sx={{ marginTop: '50px', marginBottom: "10px" }} >
                    <Label children={"Visit"} />
                </Box>
                {selectedLesson && selectedLesson.supportingLinks.map((link, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
                        <ArrowRightIcon />
                        {/* <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /> */}
                        <Typography sx={{ color: 'primary.light', fontWeight: "400", textAlign: "left", cursor: "pointer", fontSize: isSmallScreen?"11px":"16px" }} onClick={() => handleVisitLink(link)}>
                            {link}
                        </Typography>
                    </Box>
                ))}
                {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ArrowRightIcon /> */}
                {/* SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /> */}
                {/* <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "left" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ArrowRightIcon /> */}
                {/* <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /> */}
                {/* <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "left" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Box> */}
                <Box sx={{ marginTop: '50px', marginBottom: "10px" }} >
                    <Box sx={{ marginBottom: "10px" }}>
                        <Label children={'Description'} />
                    </Box>
                    <Typography  variant={isSmallScreen?"body2":"subtitle1"} sx={{marginBottom: "10px"}}>Course Full Description</Typography>
                    <Typography>
                        {courseFullDescription}
                    </Typography>
                </Box>

            </Box>
            <FooterComp />
        </Box>
    )
}

export default CourseFullView