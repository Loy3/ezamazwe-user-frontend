

import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GetUserDataFunction } from "../Services/AuthService";


const CourseView = ({ course_data }) => {
    const location = useLocation();
    const courseData = location.state.course_data;

    const [courseId, setCourseId] = useState(courseData.id);
    const [courseTitle, setCourseTitle] = useState(courseData.courseName);
    const [courseDescription, setCourseDescription] = useState(courseData.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(courseData.courseDescription);
    const [costPrice, setCostPrice] = useState(courseData.coursePrice);
    const [video, setVideo] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [userSubscription, setUserSubscription] = useState('');

    const user = auth.currentUser;
    const userId = user.uid;
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            // Fetch user data if user is authenticated
            userData();
        }
    }, [userId]);

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

        if (user) {
            if (costPrice === "Free") {
                navigate('/coursefullview', { state: { courseData: courseData } });
            } else if (costPrice === "Subscription" && userSubscription === "Subscribed") {
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
            <h3>{courseTitle}</h3>
            <p>{courseDescription}</p>
            <h3>{costPrice}</h3>

            <button onClick={handleStartCourse}>START</button>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseView;
