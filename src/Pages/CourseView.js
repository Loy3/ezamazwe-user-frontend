

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GetUserDataFunction } from "../Services/AuthService";


const CourseView = ({ course_data, docData }) => {
    const location = useLocation();
    const courseData = location.state.course_data;
    const doc_data = location.state.docData;
    console.log("courseData", courseData);
    console.log("doc_data:", doc_data);

    const [courseId, setCourseId] = useState(courseData.id);
    const [courseTitle, setCourseTitle] = useState(doc_data.courseName);
    const [courseDescription, setCourseDescription] = useState(doc_data.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(doc_data.courseDescription);
    const [costPrice, setCostPrice] = useState(doc_data.coursePrice);
    const [video, setVideo] = useState(courseData.lessonUrl);
    const [userInfo, setUserInfo] = useState(null);
    const [userSubscription, setUserSubscription] = useState(false);
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
            if (costPrice === "Free") {
                navigate('/coursefullview', { state: { courseData: courseData, doc_data: doc_data } });
            } else if (costPrice === "Subscription" && userSubscription === true) {
                navigate('/coursefullview', { state: { courseData: courseData } });
            } else {
                alert("Only subscribed users can access this course");
                navigate('/courses');   // Navigate back to courses page
            }
        } else {
            // Navigate to signin page
            navigate('/');
        }
    }


    return (
        <div>
            <h2>Course View</h2>
            <video ref={videoRef} width="400" height="300">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3>{lessonName}</h3>
            <p>Description: {courseDescription}</p>
            <h3>{costPrice}</h3>

            <button onClick={handleStartCourse}>START</button>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseView;
