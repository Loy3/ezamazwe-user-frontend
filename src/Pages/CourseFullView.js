import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/material";


const CourseFullView = ({ courseData }) => {
    const location = useLocation();
    const course = location.state.courseData;
    console.log("View Full Course: ", course);

    const [courseId, setCourseId] = useState(course.id);
    const [courseTitle, setCourseTitle] = useState(course.courseName);
    const [courseDescription, setCourseDescription] = useState(course.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(course.courseFullDescription);
    const [subscription, setSubscription] = useState(course.coursePrice);
    const [selectedLesson, setSelectedLesson] = useState()
    // const [video, setVideo] = useState(selectedLesson.video);
    const [lesson, setLesson] = useState(course.lessonName);

    const user = auth.currentUser;
    const navigate = useNavigate();

    let count = 1;


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



    return (
        <div>
            <h2>Course Full View</h2>
            <h3>{courseTitle}</h3>

            {/* Course Video */}
            <div>
                <div>
                    <video ref={videoRef} controls width="400" height="300">
                        {selectedLesson && selectedLesson.video ? (
                            <source src={selectedLesson.video} type="video/mp4" />
                        ) : (
                            <p>No video available for the selected lesson.</p>
                        )}
                        Your browser does not support the video tag.
                    </video>
                    <br></br>
                    <button onClick={handlePlayPause} style={{ marginLeft: '150px' }}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <div>
                    <div>
                        {course.lessons.map((lesson) => (
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Lesson {count++}: </Typography>
                                        <Typography>{lesson.lessonName}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {lesson.topics.map((topic, index) => (
                                            <div key={index}>
                                                <Button onClick={() => viewLesson(topic)} >
                                                    {topic.topicName}
                                                </Button>
                                            </div>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>

                            </>
                        ))}
                    </div>
                </div>
            </div>
            <h3>{lesson}</h3>
            <p>{courseDescription}</p>
            <h3>{subscription}</h3>

            <h3>Visit</h3>
            <div>
                {selectedLesson && selectedLesson.supportingLinks.map((link) => (
                    <div>
                        <Link>{link}</Link>
                    </div>
                ))}

            </div>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseFullView;
