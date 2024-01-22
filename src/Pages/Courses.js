import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import { Accordians } from '../Components/Accordians';
import video1 from "../Assets/Videos/video1.mp4";
import { CourseCard } from "../Components/Cards"
import { useMediaQuery } from '@mui/material';
import { FilterButton } from '../Components/Buttons';
import { FilterCategoryFunction, fetchCourseData, fetchCourseLessons, fetchLessonTopics } from "../Services/CourseService";
import { FilterTopicFunction } from "../Services/CourseService";
import { FilterGradeFunction } from "../Services/CourseService";
import { FilterSubscriptionFunction } from "../Services/CourseService";
import { fetchCourseDetailsFunction } from "../Services/CourseService";
import { FilteredDocFunction, fetchCoursesFunction, getCategoryData } from '../Services/CourseService';
import { ViewCoursesFunction } from "../Services/CourseService";
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
const Category = ["CAP", "IEB", "Entrapreneur"]
const Grades = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
const Subjects = ["Language", "Accounting", "Economics", "History", "Life Science", "Maths", "Physical Science",]
const Subscription = ["Free", "Paid"]
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";

function Courses() {
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    // const [returnType, setReturnType] = useState('')
    const [filterCategories, setFilterCategories] = useState([])
    const [subCategory, setSubCategory] = useState('')
    const [topicS, setTopicS] = useState('')
    const [type, setType] = useState('')

    // const [categoryStatus, setCategoryStatus] = useState('')
    const [subCategoryStatus, setSubCategoryStatus] = useState(false);
    const [topicSStatus, setTopicSStatus] = useState(false);
    const [typeStatus, setTypeStatus] = useState(false);
    const [coursesTitle, setCoursesTitle] = useState("All Courses");
    const [rtnCategory, setRtnCategory] = useState('')
    // const [rtnSubCategory, setRtnSubCategory] = useState("");
    // const [rtnTopic, setRtnTopic] = useState("");
    // const [rtnType, setRtnType] = useState("");

    const [courses, setCourses] = useState([]);
    const [docData, setDocData] = useState([]);
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [subscription, setSubscription] = useState('');
    const videoRef = useRef(null);
    const [course, setCourse] = useState(null);

    const [openMenuStatus, setOpenMenuStatus] = useState(false);
    useEffect(() => {
        if (!isMediumScreen) {
            setOpenMenuStatus(true)
        } else {
            setOpenMenuStatus(false)
        }
    }, [isMediumScreen])

    useEffect(() => {
        if (rtnCategory) {
            setSubCategoryStatus(true);
            handleCategoryFilter();
        } else {
            setSubCategoryStatus(false)
        }
    }, [rtnCategory])

    useEffect(() => {
        if (subCategory) {
            setTopicSStatus(true);
            handleGradeFilter();
            setCoursesTitle(`${subCategory} Courses`);
        } else {
            setTopicSStatus(false)
        }
    }, [subCategory])

    useEffect(() => {
        if (topicS) {
            setTypeStatus(true);
            handleFilteredDoc();
            setCoursesTitle(`${topicS} Courses`);
        } else {
            setTypeStatus(false)
        }
    }, [topicS])

    useEffect(() => {
        if (subscription) {
            handleSubscriptionFilter();
            setCoursesTitle(`${subscription} Courses`);
        }
    }, [subscription])

    const [categories, setCategories] = useState()

    useEffect(() => {
        const category = async () => {
            await getCategoryData().then(data => {
                const catNames = categoryNames(data)
                // console.log('****',catNames);
                let catArr = [];

                catNames.map(value => {
                    const entries = Object.entries(value)
                    catArr.push(entries[0][1])
                })
                // console.log("catArr:", catArr)
                // console.log("catArr:", data)
                setFilterCategories(catArr)
                setCategories(data);
            })
        }
        category()
    }, [])

    // useEffect(() => {
    // handleViewCourses();

    const testTheCode = async (id, hyphenatedName) => {
        let courseTest = null

        try {
            // console.log("course id", id);
            // await fetchCourseData(id).then(async (courseResponse) => {

            //     courseTest = { ...courseResponse, lessons: [] }
            //     await fetchCourseLessons(courseResponse.id).then(lessonsResponse => {
            //         lessonsResponse.forEach(async lesson => {
            //             let localLesson = { ...lesson, topics: [] }
            //             await fetchLessonTopics(courseResponse.id, lesson.id).then(topicResponse => {
            //                 console.log("topicResponse====", topicResponse)
            //                 localLesson.topics = [...topicResponse]
            //             })
            //             courseTest.lessons.push(localLesson)
            //         })
            //     })
            //     console.log("testTheCode", courseTest.lessons.length);
            //     setCourse(courseTest);

            // })
            console.log({ courseID: id });
            await fetchCourseData(id).then(async (courseResponse) => {
                courseTest = { ...courseResponse, lessons: [] };
                const lessonsResponse = await fetchCourseLessons(courseResponse.id);
                const lessonPromises = lessonsResponse.map(async (lesson) => {
                  let localLesson = { ...lesson, topics: [] };
                  const topicResponse = await fetchLessonTopics(courseResponse.id, lesson.id);
                  localLesson.topics = [...topicResponse];
                  return localLesson;
                });
                const lessons = await Promise.all(lessonPromises);
                courseTest.lessons = lessons;
                // console.log("testTheCode", courseTest.lessons.length);


                navigate(`/course/${hyphenatedName}`, { state: { course_data: courseTest } });
                // setCourse(courseTest);
              });
              
            return courseTest
        } catch (error) {
            console.log("Error:", error);
        }

    }

    //     testTheCode()

    // }, []);

    // useEffect(() => {
    //     console.log({ course });
    //     // if (course) {
    //     //     setCourse(course)
    //     // }
    // }, [course])

    const categoryNames = (types) => {
        return Object.keys(types).map(key => {
            return { [key.toLowerCase()]: types[key].name }

        })
    }

    const subCategories = (key) => {
        // console.log('key:', key)
        // console.log('cats:', categories)
        return categories[key]?.grades || [];
    };

    const subjects = (key, grade) => {
        const convertedGrade = grade.replace(" ", "_");
        // console.log(convertedGrade);
        if (categories[key] && categories[key].subjects && categories[key].subjects[convertedGrade]) {
            // console.log(categories[key].subjects[convertedGrade]);
            return categories[key].subjects[convertedGrade];
        }
        return [];
    };

    // console.log('subjects')
    // if (categories) {
    //     console.log(subjects(rtnCategory.toLowerCase(), subCategory))
    // }

    // const navigate = useNavigate();

    // useEffect(()=>{
    //     handleFilteredCourses()
    // },[])


    // View filtered courses
    const handleFilteredCourses = async () => {
        try {
            const data = await fetchCoursesFunction(subject, category, grade);
            console.log("Courses filtered data:", data);
            setCourses(data);

            handleFilteredDoc();

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }


    // View filtered doc
    const handleFilteredDoc = async () => {

        const convertedGrade = subCategory.replace(" ", "_");
        // console.log(convertedGrade);
        try {
            const data = await FilteredDocFunction(rtnCategory, topicS, convertedGrade);
            // console.log("Filtered doc datass:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error pulling filtered doc", error);
        }
    }


    function openMenu(type) {
        switch (type) {
            case "open":
                setOpenMenuStatus(true);
                break;
            case "close":
                setOpenMenuStatus(false);
                break;
            default:
        }
    }

    function viewCourse() {
        navigate("/course")
    }

    // View all courses
    useEffect(() => {
        handleViewCourses()
    }, [])
    // const handleViewCourses = async () => {

    //     try {
    //         setCourses([]);
    //         const data = await ViewCoursesFunction();
    //         let returnCourses = []
    //         // data.forEach(async (dat) => {
    //         //     const videoToGet = await getCourseVideo(dat.id);
    //         //     setCourses((prevCourse) => [...prevCourse, { ...dat, video: videoToGet }])
    //         // });

    //         for (const dat of data) {
    //             const videoToGet = await getCourseVideo(dat.id);
    //             // setCourses((prevCourse) => [...prevCourse, { ...dat, video: videoToGet }]);

    //             setCourses((prevCourse) => {
    //                 // Check if the item already exists in the array
    //                 const isDuplicate = prevCourse.some((course) => course.video === videoToGet);

    //                 // If it's a duplicate, return the previous state without making any changes
    //                 if (isDuplicate) {
    //                   return prevCourse;
    //                 }

    //                 // If it's not a duplicate, add the new item to the array
    //                 return [...prevCourse, { ...dat, video: videoToGet }];
    //               });
    //         }

    //     } catch (error) {
    //         console.log("Error fetching data", error);
    //     }
    // }

    const handleViewCourses = async () => {
        try {
            const data = await ViewCoursesFunction();
            console.log("Courses data:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
        }
    }


    const getCourseVideo = async (id) => {
        let courseTest = null

        try {
            // console.log("course id", id);
            let videoToReturn = "";
            await fetchCourseData(id).then(async (courseResponse) => {

                courseTest = { ...courseResponse, lessons: [] }
                let videoToGet = "";
                await fetchCourseLessons(courseResponse.id).then(async (lessonsResponse) => {

                    let localVid = "";
                    await fetchLessonTopics(courseResponse.id, lessonsResponse[0].id).then(topicResponse => {
                        localVid = topicResponse[0].video;
                    })
                    videoToGet = localVid;
                })
                // console.log("get video",videoToGet);
                // setCourse(courseTest);
                videoToReturn = videoToGet;
            })
            return videoToReturn;
        } catch (error) {
            console.log("Error:", error);
        }

    }

    // Filter courses with category
    const handleCategoryFilter = async () => {
        try {
            const data = await FilterCategoryFunction(rtnCategory.toLocaleLowerCase());
            // console.log("Courses data 3:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }

    const handleGradeFilter = async () => {
        const convertedGrade = subCategory.replace(" ", "_");
        try {
            const data = await FilterGradeFunction(convertedGrade);
            // console.log("Courses data filtered with topic:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
        }
    }

    const handleSubscriptionFilter = async () => {
        console.log(subscription);
        try {
            const data = await FilterSubscriptionFunction(subscription);
            // console.log("Courses data filtered with subscription:", data);
            setCourses(data);

        } catch (error) {
            console.log("Error fetching data",);
        }
    }

    const handleViewCourse = async (event, id, name, course) => {
        event.preventDefault();
        // const [course_data] = courses.filter((course) => course.id === id);
        // console.log('course clicked: ', { id, name, course });
        // return
        const hyphenatedName = (name.trim().toLowerCase()).replaceAll(' ', '-')
        console.log(hyphenatedName);
        // navigate(`/course/${id}`)
        // navigate('/course', { state: { course_data: course_data, docData: docData } });
        // return 
        await testTheCode(id, hyphenatedName).then((courseRes) => {
            console.log(courseRes.lessons);
            // const lessons = courseRes.lessons
            // console.log(course.lessons);
            // navigate('/course', { state: { course_data: courseRes } });
            // console.log("course",course);
            // if (course) {
            //     navigate('/course', { state: { course_data: course } });
            // } else {
            //     alert("Click again.")
            // }
        })


    }



    if (filterCategories === null) {
        return (
            <>
                <Typography variant='h5'>Loading...</Typography>
            </>
        )
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: isMediumScreen ? 'column' : 'row', margin: '50px 2%', width: "96%" }}>
            <Grid sx={{ width: isMediumScreen ? '100%' : '20%', margin: isMediumScreen ? "0 0 30px 0" : "0" }}>

                <Box sx={{ justifyContent: 'flex-start', paddingTop: '20px', width: "96%", margin: "0 2%" }}>
                    {isMediumScreen ?
                        <Box sx={{ width: "96%", margin: "0 2%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: "80%" }}>
                                <FilterButton text={"Filter"} buttonFunction={() => openMenu("open")} />
                            </Box>
                        </Box>
                        :
                        null
                        // <Box sx={{ width: "96%", margin: "0 2%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        //     <Box sx={{ width: "90%", marginLeft: "-30px" }}>
                        //         <FilterButton text={"Filter"} />
                        //     </Box>

                        // </Box>
                    }
                    {/* <Button variant="outlined" startIcon={<TuneIcon />} sx={{ width: "150px", border: "2px solid", fontWeight: "bold", borderRadius: "12px" }}>
          Filter
        </Button> */}
                    {/* {console.log(filterCategories)} */}
                    {openMenuStatus ?
                        <Box sx={{ width: "88%", padding: isMediumScreen ? "70px 5% 80px 5%" : "auto", backgroundColor: "white", marginBottom: isMediumScreen ? "50px" : "0", height: isMediumScreen ? "100%" : "auto", position: isMediumScreen ? "fixed" : "relative", zIndex: "70", top: isMediumScreen ? "0" : "unset", overflowY: isMediumScreen ? "scroll" : "unset" }}>
                            {/* <Box sx={{width:"30px", height:"30px", backgroundColor:"black", position:"absolute", top:"20px", right:"30px",zIndex:"70" }}></Box> */}
                            {isMediumScreen ?
                                <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer", position: "absolute", right: "5px", top: "20px", zIndex: "50" }} onClick={() => openMenu("close")}> <CancelIcon sx={{ color: "primary.light", width: "30px", height: "30px" }} /></Button>
                                : null}
                            <Box sx={{ paddingTop: '20px' }}>
                                <Accordians label={'Category'} types={filterCategories} setReturnType={setRtnCategory} returnType={rtnCategory} />
                            </Box>
                            {subCategoryStatus ?
                                <Box sx={{ paddingTop: '20px' }}>
                                    <Accordians label={'Sub Categories'} types={subCategories(rtnCategory.toLowerCase())} setReturnType={setSubCategory} returnType={subCategory} />
                                </Box>
                                : null
                            }
                            {topicSStatus ?
                                <Box sx={{ paddingTop: '20px' }}>
                                    <Accordians label={'Topics'} types={subjects(rtnCategory.toLowerCase(), subCategory)} setReturnType={setTopicS} returnType={topicS} />
                                </Box>
                                : null
                            }
                            {typeStatus ?
                                <Box sx={{ paddingTop: '20px', paddingBottom: "60px" }}>
                                    <Accordians label={'Subscription'} types={Subscription} setReturnType={setSubscription} returnType={subscription} />
                                </Box>
                                : null
                            }
                        </Box>
                        : null
                    }

                </Box>
            </Grid>
            <Grid sx={{ width: isMediumScreen ? '100%' : '80%', padding: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box>
                        <Typography variant='h4' sx={{ color: '#396781', fontWeight: 'bold' }}>
                            {coursesTitle}
                        </Typography>
                        <Typography >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ flexDirection: 'column', padding: '20px' }}>
                    {courses && courses.map((course, index) => (
                        <Box key={index} sx={{ margin: "20px 0" }}>
                            <CourseCard courseName={course.courseName} courseType={course.courseType} shortDescrip={course.courseShortDescription} video={course.video ? course.video : video1} cardFunction={(event) => handleViewCourse(event, course.id, course.courseName, course )} />
                        </Box>
                    ))}
                </Box>
                {courses.length === 0 ?
                    <Typography variant='h6' sx={{ fontStyle: "italic", marginTop: "10px" }}>Courses not available.</Typography>
                    : null
                }
                {console.log(courses)}
                {/* <button onClick={handleViewCourses}>All Courses</button> */}
            </Grid>
        </Box>
    )
}

export default Courses