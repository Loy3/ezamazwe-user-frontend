

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";


const CourseFullView = ({ courseData }) => {
    const location = useLocation();
    const course = location.state.courseData;

    const [courseId, setCourseId] = useState(course.id);
    const [courseTitle, setCourseTitle] = useState(course.courseName);
    const [courseDescription, setCourseDescription] = useState(course.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(course.courseDescription);
    const [subscription, setSubscription] = useState(course.coursePrice);
    const [video, setVideo] = useState(course.lessonUrl);
    const [lesson, setLesson] = useState(course.lessonName);

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


    return (
        <div>
            <h2>Course Full View</h2>
            <h3>{courseTitle}</h3>

            {/* Course Video */}
            <div>
                <video ref={videoRef} controls width="400" height="300">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <br></br>
                <button onClick={handlePlayPause} style={{marginLeft:'150px'}}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
            <h3>{lesson}</h3>
            <p>{courseDescription}</p>
            <h3>{subscription}</h3>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseFullView;
