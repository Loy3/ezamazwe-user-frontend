
import React, { useState, useRef } from "react";
import { ViewCoursesFunction } from "../Services/CourseService";
import { FilterCategoryFunction } from "../Services/CourseService";
import { FilterTopicFunction } from "../Services/CourseService";
import { FilterGradeFunction } from "../Services/CourseService";
import { FilterSubscriptionFunction } from "../Services/CourseService";
import { useNavigate } from "react-router-dom";
import { fetchCoursesFunction } from "../Services/CourseService";
import { FilteredDocFunction } from "../Services/CourseService";


const Courses = () => {

    const [courses, setCourses] = useState({});
    const [docData, setDocData] = useState([]);
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [subscription, setSubscription] = useState('');
    const videoRef = useRef(null);
    const navigate = useNavigate();


    // View filtered courses
    const handleFilteredCourses = async () => {
        try {
            const data = await fetchCoursesFunction(subject, category, grade);
            console.log("Courses filtered data:", data);
            setCourses(data);

            // handleFilteredDoc();

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }


    // View filtered doc
    const handleFilteredDoc = async () => {
        try {
            const data = await FilteredDocFunction(subject, category, grade);
            console.log("Filtered doc data:", data);
            setDocData(data);

        } catch (error) {
            console.log("Error pulling filtered doc", error);
        }
    }


    // View all courses
    const handleViewCourses = async () => {
        try {
            const data = await ViewCoursesFunction();
            console.log("Courses data:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
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
            console.log("Error fetching data",);
        }
    }

    const handleGradeFilter = async () => {
        try {
            const data = await FilterGradeFunction(grade);
            console.log("Courses data filtered with topic:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
        }
    }

    const handleSubscriptionFilter = async () => {
        try {
            const data = await FilterSubscriptionFunction(subscription);
            console.log("Courses data filtered with subscription:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
        }
    }

    const handleViewCourse = (id) => {
        const [course_data] = courses.filter((course) => course.id === id);

        navigate('/courseview', { state: { course_data: course_data, docData: docData } });
    }


    return (
        <div>

            <div style={{ marginTop: '50px' }}>
                <button onClick={handleFilteredCourses}>Filter (3)</button>
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
                        <input type="text"
                            placeholder="Subscription"
                            value={subscription}
                            onChange={(e) => setSubscription(e.target.value)}
                        />
                    </div>
                </div>

                <div style={{ marginLeft: '25px' }}>
                    <div>
                        <h3>{subject} Courses</h3>
                    </div>
                    {courses && courses.filteredCourseContent ? (
                        <div>
                            {courses.filteredCourseContent.map((content) => (
                                <div>
                                    <h4>{content.lessonName} </h4>
                                    <div>
                                        {courses.topicsData.map((topic) => (
                                            <div>
                                                <p>Video Name: {topic.videoName}</p>
                                                <video ref={videoRef} controls width="400" height="300">
                                                    <source src={topic.video} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        {courses.filteredDocContent.map((course) => (
                                            <div>
                                                <h5>Course Type: {course.courseType}</h5>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={() => handleViewCourse(courses.id)}>View Course</button>
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