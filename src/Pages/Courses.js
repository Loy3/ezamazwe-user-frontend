
import React, { useState, useRef } from "react";
import { ViewCoursesFunction } from "../Services/CourseService";
import { FilterCategoryFunction } from "../Services/CourseService";
import { FilterTopicFunction } from "../Services/CourseService";
import { FilterGradeFunction } from "../Services/CourseService";
import { FilterSubscriptionFunction } from "../Services/CourseService";
import { useNavigate } from "react-router-dom";
import { fetchCoursesFunction } from "../Services/CourseService";
import { fetchCourseDetailsFunction } from "../Services/CourseService";


const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [details, setDetails] = useState([]);
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [subscription, setSubscription] = useState('');
    const videoRef = useRef(null);
    const navigate = useNavigate();


    // View filtered courses
    const handleFilteredCourses = async () => {
        try {
            const data = await fetchCoursesFunction(subject, category, grade, subscription);
            console.log("Courses filtered data:", data);
            setCourses(data);

            handleFilteredCourseDetails();

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    // View filtered courses
    const handleFilteredCourseDetails = async () => {
        try {
            const data = await fetchCourseDetailsFunction(subject, category, grade, subscription);
            console.log("Course details:", data);
            setDetails(data);

        } catch (error) {
            console.log("Error fetching course details", error);
        }
    }



    // View all courses
    const handleViewCourses = async () => {
        try {
            const data = await ViewCoursesFunction();
            console.log("Courses data:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    // Filter courses with category
    const handleCategoryFilter = async () => {
        try {
            const data = await FilterCategoryFunction(category);
            console.log("Courses data:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    // Filter courses with topic or subject
    const handleTopicFilter = async () => {
        try {
            const data = await FilterTopicFunction(subject);
            console.log("Courses data filtered with topic:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    const handleGradeFilter = async () => {
        try {
            const data = await FilterGradeFunction(grade);
            console.log("Courses data filtered with topic:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    const handleSubscriptionFilter = async () => {
        try {
            const data = await FilterSubscriptionFunction(subscription);
            console.log("Courses data filtered with subscription:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    // View selected course
    const handleViewCourse = (id) => {
        const [course_data] = courses.filter((course) => course.id === id);
        const selectedDetails = details.filter((detail) => detail.courseId === id);

        navigate('/courseview', {
            state: {
                course_data: course_data,
                details: selectedDetails           // CourseTitle, CourseDescription, FREE/Subscription, 
            }
        });
    }


    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <button onClick={handleFilteredCourses}>Filter (4)</button>
            </div>

            <div style={{ marginTop: '50px' }}>
                <button onClick={handleViewCourses}>All Courses</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px', marginLeft: '50px' }}>
                <div>
                    <div>
                        <button onClick={handleCategoryFilter}>Filter</button>
                        <input type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <button onClick={handleTopicFilter}>Filter</button>
                        <input type="text"
                            placeholder="Topic or Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <button onClick={handleGradeFilter}>Filter</button>
                        <input type="text"
                            placeholder="Grade"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <button onClick={handleSubscriptionFilter}>Filter</button>
                        <label>
                            <input
                                type="radio"
                                value="Free"
                                checked={subscription === 'Free'}
                                onChange={(e) => setSubscription(e.target.value)}
                            />
                            Free
                        </label>

                        <label>
                            <input
                                type="radio"
                                value="Subscription"
                                checked={subscription === 'Subscription'}
                                onChange={(e) => setSubscription(e.target.value)}
                            />
                            Subscription
                        </label>
                    </div>
                </div>

                <div style={{ marginLeft: '25px' }}>
                    <div>
                        <h3>{subject} Courses</h3>
                    </div>
                    {courses ? (
                        <div>
                            {courses.map((course) => (
                                <div>
                                    <h4>{course.lessonName} </h4>
                                    <h5>Lesson Type: {course.lessonType}</h5>
                                    <p>Lesson Url: {course.lessonUrl}</p>
                                    <video ref={videoRef} width="400" height="300">
                                        <source src={course.lessonUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <p>{details.courseShortDescription}</p>
                                    <button onClick={() => handleViewCourse(course.id)}>View Course</button>
                                    <h3>____________________________________________________________________________________________</h3>
                                </div>
                            ))}
                        </div>
                    )
                        :
                        (
                            <div>
                                <h3>No Courses found!</h3>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Courses;