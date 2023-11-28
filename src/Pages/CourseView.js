

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GetUserDataFunction } from "../Services/AuthService";


const CourseView = ({ course_data, details }) => {
    const location = useLocation();
    const courseData = location.state.course_data;
    const doc_data = location.state.details;
    console.log("courseData", courseData);
    console.log("doc_data:", doc_data);

    const [courseId, setCourseId] = useState(courseData.id);
    const [courseDetails, setCourseDetails] = useState(null)
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseFullDescription, setCourseFullDescription] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [video, setVideo] = useState(courseData.lessonUrl);
    const [userInfo, setUserInfo] = useState(null);
    const [userSubscription, setUserSubscription] = useState(false);
    const [lessonName, setLessonName] = useState(courseData.lessonName);
    const videoRef = useRef(null);

    const user = auth.currentUser;
    let userId = '';
    const navigate = useNavigate();

    useEffect(() => {

        setCourseTitle(doc_data.map(course => course.courseName));
        setCourseDescription(doc_data.map(course => course.courseShortDescription));
        setCourseFullDescription(doc_data.map(course => course.courseDescription));
        setCostPrice(doc_data.map(course => course.coursePrice));

        console.log("courseTitle:", courseTitle);

    }, []);

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
        console.log("costPrice:", costPrice);

        if (user) {
            if (costPrice === "Free") {
                navigate('/coursefullview', {
                    state: {
                        courseData: courseData,
                        doc_data: doc_data
                    }
                });
            } else if (costPrice === "Subscription" && userSubscription) {
                navigate('/coursefullview', {
                    state: {
                        courseData: courseData,
                        doc_data: doc_data
                    }
                });
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
            <h2>Course View</h2>
            <video ref={videoRef} controls width="400" height="300">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3>{courseTitle}</h3>
            <p> {courseDescription}</p>
            <h3>{costPrice}</h3>

            <button onClick={handleStartCourse}>START</button>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseView;
