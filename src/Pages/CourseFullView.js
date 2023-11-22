

import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";


const CourseFullView =({courseData})=>{
    const location = useLocation();
    const course = location.state.courseData;

    const [courseId, setCourseId] = useState(course.id);
    const [courseTitle, setCourseTitle] = useState(course.courseName);
    const [courseDescription, setCourseDescription] = useState(course.courseShortDescription);
    const [courseFullDescription, setCourseFullDescription] = useState(course.courseDescription);
    const [subscription, setSubscription] = useState(course.coursePrice);
    const [video, setVideo] = useState('');

    const user = auth.currentUser;
    const navigate = useNavigate();


    return (
        <div>
            <h3>{courseTitle}</h3>
            <p>{courseDescription}</p>
            <h3>{subscription}</h3>

            <h3>Description</h3>
            <p>{courseFullDescription}</p>
        </div>
    );
}

export default CourseFullView;
