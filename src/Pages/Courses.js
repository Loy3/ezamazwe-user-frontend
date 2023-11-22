
import React, { useState } from "react";
import { ViewCoursesFunction } from "../Services/CourseService";
import { FilterCategoryFunction } from "../Services/CourseService";
import { FilterTopicFunction } from "../Services/CourseService";
import { FilterGradeFunction } from "../Services/CourseService";
import { FilterSubscriptionFunction } from "../Services/CourseService";
import { useNavigate } from "react-router-dom";


const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [category, setCategory] = useState('');
    const [topic, setTopic] = useState('');
    const [grade, setGrade] = useState('');
    const [subscription, setSubscription] = useState('');
    const navigate = useNavigate();
    

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
            const data = await FilterTopicFunction(topic);
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

        navigate('/courseview', { state: { course_data: course_data } });
    }


    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <button onClick={handleViewCourses}>All Courses</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '50px' }}>
                <div>
                    <button onClick={handleCategoryFilter}>Filter(C)</button>
                    <br></br>
                    <input type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleTopicFilter}>Filter</button>
                    <br></br>
                    <input type="text"
                        placeholder="Topic or Subject"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleGradeFilter}>Filter</button>
                    <br></br>
                    <input type="text"
                        placeholder="Grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleSubscriptionFilter}>Filter</button>
                    <br></br>
                    <input type="text"
                        placeholder="Subscription"
                        value={subscription}
                        onChange={(e) => setSubscription(e.target.value)}
                    />
                </div>
            </div>

            <div>
                {courses.map((course) => (
                    <div>
                        <h4>All {course.courseName} Courses</h4>
                        <h5>{course.coursePrice}</h5>
                        <p>{course.courseShortDescription}</p>
                        <button onClick={() => handleViewCourse(course.id)}>View Course</button>
                        {/* <div>
                            {course.courseCategory.map((category) => (
                                <div>
                                    <p>Topic: {category.subjectOrTopic}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Courses;