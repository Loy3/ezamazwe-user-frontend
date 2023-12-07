

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GetUserDataFunction } from "../Services/AuthService";


const CourseView = ({ course_data }) => {
    const location = useLocation();
    const courseData = location.state.course_data;
    console.log("courseData", courseData);


    const [courseId, setCourseId] = useState(courseData.id);
    const [courseName, setCourseName] = useState(courseData.courseName);
    const [courseDescription, setCourseDescription] = useState(courseData.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(courseData.courseFullDescription);
    const [courseType, setCourseType] = useState(courseData.courseType);
    const [video, setVideo] = useState(courseData.lessonUrl);
    const [userInfo, setUserInfo] = useState(null);
    const [userSubscription, setUserSubscription] = useState(false);
    const [lessonName, setLessonName] = useState(courseData.lessonName);
    const videoRef = useRef(null);

    const user = auth.currentUser;
    let userId = '';
    const navigate = useNavigate();
    let count = 1;

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
            setUserSubscription(userInfo.subscribed);
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

        if (user) {
            if (courseType === "Free") {
                navigate('/coursefullview', { state: { courseData: courseData } });
            } else if (courseType === "Paid" && userSubscription === true) {
                navigate('/coursefullview', { state: { courseData: courseData } });
            } else {
                alert("Only subscribed users can access this course");
                navigate('/courses');   // Navigate back to courses page
            }
        } else {
            // Navigate to signin page
            navigate('/signin');
        }
    }


    return (
        <div>
            
            <h2>What you will learn</h2>
            <div>
                {courseData.learningOutcomes.map((outcome) => (
                    <div>
                        <p>{outcome}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>Lessons:</h3>
                <div>
                    {courseData.lessons ? (
                        <div>
                            {courseData.lessons.map((lesson, index) => (
                                <div key={index}>
                                    <h5>Lesson {count++}</h5>
                                    <p>{lesson.lessonName}</p>
                                    <p>Duration: {lesson.lessonDuration ? lesson.lessonDuration : "00:00"}</p>
                                </div>
                            ))}
                        </div>

                    )
                        :
                        <div>
                            
                            <div>
                                <h3>No lessons found</h3>
                            </div>
                            
                        </div>
                    }
                </div>

            </div>
            <video ref={videoRef} width="400" height="300">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>{courseName}</h2>
            <p>Description: {courseDescription}</p>
            <h3>{courseType}</h3>

            <button onClick={handleStartCourse}>START</button>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseView;
