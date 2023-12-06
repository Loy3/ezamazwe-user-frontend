import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { Container, Grid, selectClasses, useMediaQuery } from '@mui/material';
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

function CourseFullView({ courseData }) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const location = useLocation();
    const course = location.state.courseData;
    // console.log(course);

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

    useEffect(() => {
        getCourseLessons();
    }, [])

    async function getCourseLessons() {
        // console.log(course.id);
        try {
            const courseData = await CourseFullViewFunction(course.id);
            console.log("Courses data:", courseData);
            getCourseLessonTopics(courseData);
            // setLessons(courseData);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    async function getCourseLessonTopics(courseResData) {
        // console.log(course.id);
        setLessons([]);
        try {
            courseResData.forEach(async (crs) => {
                const courseRes = await CourseTopicsFunction(course.id, crs.id);
                setLessons(((prevData) => [...prevData, ...courseRes]));
            })
            setVideo(lessons[0].video)

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }


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
                <Box sx={{ width: isSmallScreen ? "100%" : "75%", margin: "0", height: isSmallScreen ? "50vh" : "70vh" }}>
                    <video style={{ width: "100%", height: "100%", objectFit: "cover" }} controls>
                        <source src={video ? video : video1} type="video/mp4" />
                    </video>
                </Box>
                <Box sx={{ width: isSmallScreen ? "100%" : "25%", height: "auto" }}>
                    {lessons.map((less, index) => (
                        <Accordion key={index} sx={{ backgroundColor: '#E3ECF1', height: 'auto' }}>
                            <AccordionSummary
                                expandIcon={<ArrowLeftIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ width: "40%", margin: "0 5%", height: "100%", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>{`Lesson ${index + 1}`}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ height: '100px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    {/* <Accordion sx={{ backgroundColor: '#E3ECF1', height: "auto" }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "100%", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>Lesson 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "auto" }} >
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}> Lesson 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "auto" }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}>Lesson 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: '#E3ECF1', height: "auto" }}>
                        <AccordionSummary
                            expandIcon={<ArrowLeftIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light", fontSize: '20px', textAlign: "center", marginTop: "7px" }}> Lesson 5</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}
                </Box>
            </Grid>

            <Box sx={{ width: "90%", margin: "100px 5%" }}>
                <Label children={"Course Overview"} />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                <Box sx={{ marginTop: '50px', marginBottom: "10px" }} >
                    <Label children={"Visit"} />
                </Box>
                {lessons[0]?.supportingLinks.map((link, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
                        <ArrowRightIcon />
                        {/* <SectionSubHeading children={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} /> */}
                        <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "left" }}>
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
                    <Typography  >Course Full Description</Typography>
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