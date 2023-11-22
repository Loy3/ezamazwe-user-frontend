

import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GetUserDataFunction } from "../Services/AuthService";


const CourseView =({course_data})=>{
    const location = useLocation();
    const courseData = location.state.course_data;

    const [courseId, setCourseId] = useState(courseData.id);
    const [courseTitle, setCourseTitle] = useState(courseData.courseName);
    const [courseDescription, setCourseDescription] = useState(courseData.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(courseData.courseDescription);
    const [subscription, setSubscription] = useState(courseData.coursePrice);
    const [video, setVideo] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const user = auth.currentUser;
    const userId = user.uid;
    const navigate = useNavigate();

    const userData =async()=>{
        try {
            const data = await GetUserDataFunction(userId);
            setUserInfo(data);

        } catch(error) {
            console.log("Error fetching user data:", error);
        }
    }


    const handleStartCourse =()=>{
        if (user) {
            if (subscription === "Free") {
                navigate('/coursefullview', { state: { courseData: courseData } });
            } else {
                alert("Only subscribed users can access this course");
                navigate('/courses');
            }
        } else {
            // Navigate to signin page
            navigate('/');
        }
    }


    return (
        <div>
            <h3>{courseTitle}</h3>
            <p>{courseDescription}</p>
            <h3>{subscription}</h3>

            <button onClick={handleStartCourse}>START</button>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseView;
