
import React, { useState } from "react";
import { ViewCoursesFunction } from "../Services/CourseService";
import { FilterCategoryFunction } from "../Services/CourseService";
import { FilterTopicsFunction } from "../Services/CourseService";


const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [category, setCategory] = useState('');

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

    // Filter courses with topics
    const handleTopicsFilter = async () => {
        try {
            const data = await FilterTopicsFunction();
            console.log("Courses data:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
        }
    }


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '50px' }}>
                <div>
                    <button onClick={handleCategoryFilter}>Filter(C)</button>
                    <br></br>
                    <input type="text"
                        placeholder=""
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleViewCourses}>All Courses</button>
                </div>
                <div>
                    <button onClick={handleTopicsFilter}>Filter</button>
                </div>
            </div>

            <div>
                {courses.map((course) => (
                    <div>
                        <h4>Course Name: {course.courseName}</h4>
                        <h5>{course.coursePrice}</h5>
                        <p>{course.courseShortDescription}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Courses;