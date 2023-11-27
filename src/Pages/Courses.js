import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import { Accordians } from '../Components/Accordians';
import video1 from "../Assets/Videos/video1.mp4";
import { CourseCard } from "../Components/Cards"
import { useMediaQuery } from '@mui/material';
import { FilterButton } from '../Components/Buttons';
import { FilterCategoryFunction } from "../Services/CourseService";
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
const Subscription = ["Free", "Subscribed"]
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";

function Courses() {
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    // const [returnType, setReturnType] = useState('')
    const [filterCategories, setFilterCategories] = useState([])
    const [subCategory, setSubCategory] = useState('')
    const [topicS, setTopicS] = useState('')
    const [type, setType] = useState('')

    // const [categoryStatus, setCategoryStatus] = useState('')
    const [subCategoryStatus, setSubCategoryStatus] = useState(false);
    const [topicSStatus, setTopicSStatus] = useState(false);
    const [typeStatus, setTypeStatus] = useState(false);

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

    const [openMenuStatus, setOpenMenuStatus] = useState(false);
    useEffect(() => {
        if (!isSmallScreen) {
            setOpenMenuStatus(true)
        } else {
            setOpenMenuStatus(false)
        }
    }, [isSmallScreen])

    useEffect(() => {
        if (rtnCategory) {
            setSubCategoryStatus(true);
        } else {
            setSubCategoryStatus(false)
        }
    }, [rtnCategory])

    useEffect(() => {
        if (subCategory) {
            setTopicSStatus(true);
        } else {
            setTopicSStatus(false)
        }
    }, [subCategory])

    useEffect(() => {
        if (topicS) {
            setTypeStatus(true);
        } else {
            setTypeStatus(false)
        }
    }, [topicS])

    const [categories, setCategories] = useState()

    useEffect(() => {
        const category = async () => {
            await getCategoryData().then(data => {
                const catNames = categoryNames(data)
                // console.log(catNames);
                let catArr = [];

                catNames.map(value => {
                    const entries = Object.entries(value)
                    catArr.push(entries[0][1])
                })
                setFilterCategories(catArr)
                setCategories(data);
            })
        }
        category()
    }, [])

    const categoryNames = (types) => {
        return Object.keys(types).map(key => {
            return { [key]: types[key].name }

        })
    }

    const subCategories = (key) => {
        return categories[key]?.grades || [];
    };

    //     // console.log('grades')
    //   if (categories) {
    //     console.log(subCategories(rtnCategory.toLowerCase()))
    //   }

    const subjects = (key, grade) => {

        let newGrade = grade.replace(/ /g, "_")
        // console.log(newGrade);
        if (categories[key] && categories[key].subjects && categories[key].subjects[grade]) {
            return categories[key].subjects[grade];
        }
        return [];
    };

    //   console.log('subjects')
    //   if (categories) {
    //     console.log(subjects(rtnCategory.toLowerCase(), subCategory))
    //   }

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
        try {
            const data = await FilteredDocFunction(subject, category, grade);
            // console.log("Filtered doc data:", data);
            setDocData(data);

        } catch (error) {
            console.log("Error pulling filtered doc", error);
        }
    }


    function testing() {
        // console.log(testingF);
        // if (!testingF ) {
        //   seter(true)
        // }else{
        //   seter(false)
        // }

        // if (!testingP ) {
        //   seter2(true)
        // }else{
        //   seter2(false)
        // }

        console.log("Hello World!");
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

        navigate('/course', { state: { course_data: course_data, docData: docData } });
    }

    if (filterCategories === null) {
        return (
            <>
                <Typography variant='h5'>Loading...</Typography>
            </>
        )
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', margin: '50px 2%', width: "96%" }}>
            <Grid sx={{ width: isSmallScreen ? '100%' : '20%', margin: isSmallScreen ? "0 0 30px 0" : "0" }}>

                <Box sx={{ justifyContent: 'flex-start', paddingTop: '20px', width: "96%", margin: "0 2%" }}>
                    {isSmallScreen ?
                        <Box sx={{ width: "96%", margin: "0 2%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: "80%" }}>
                                <FilterButton text={"Filter"} buttonFunction={() => openMenu("open")} />
                            </Box>
                        </Box>
                        :
                        <Box sx={{ width: "96%", margin: "0 2%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: "90%", marginLeft: "-30px" }}>
                                <FilterButton text={"Filter"} />
                            </Box>

                        </Box>
                    }
                    {/* <Button variant="outlined" startIcon={<TuneIcon />} sx={{ width: "150px", border: "2px solid", fontWeight: "bold", borderRadius: "12px" }}>
          Filter
        </Button> */}
                    {/* {console.log(filterCategories)} */}
                    {openMenuStatus ?
                        <Box sx={{ width: "88%", padding: isSmallScreen ? "70px 5% 80px 5%" : "auto", backgroundColor: "white", marginBottom: isSmallScreen ? "50px" : "0", height: isSmallScreen ? "100%" : "auto", position: isSmallScreen ? "fixed" : "relative", zIndex: "70", top: isSmallScreen ? "0" : "unset", overflowY: isSmallScreen ? "scroll" : "unset" }}>
                            {/* <Box sx={{width:"30px", height:"30px", backgroundColor:"black", position:"absolute", top:"20px", right:"30px",zIndex:"70" }}></Box> */}
                            {isSmallScreen ?
                                <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer", position: "absolute", right: "5px", top: "20px", zIndex: "50" }} onClick={() => openMenu("close")}> <CancelIcon sx={{ color: "primary.light", width: "30px", height: "30px" }} /></Button>
                                : null}
                            <Box sx={{ paddingTop: '20px' }}>
                                <Accordians label={'Category'} types={filterCategories} setReturnType={setRtnCategory} returnType={rtnCategory} />
                            </Box>
                            {subCategoryStatus ?
                                <Box sx={{ paddingTop: '20px' }}>
                                    <Accordians label={'SubCategories'} types={subCategories(rtnCategory.toLowerCase())} setReturnType={setSubCategory} returnType={subCategory} />
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
                                    <Accordians label={'Subscription'} types={Subscription} setReturnType={setType} returnType={type} />
                                </Box>
                                : null
                            }
                        </Box>
                        : null
                    }

                </Box>
            </Grid>
            <Grid sx={{ width: isSmallScreen ? '100%' : '80%', padding: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box>
                        <Typography variant='h4' sx={{ color: '#396781', fontWeight: 'bold' }}>
                            All Maths Courses
                        </Typography>
                        <Typography >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ flexDirection: 'column', padding: '20px' }}>
                    {courses.map((course, index) => (
                        <Box key={index} sx={{ margin: "20px 0" }}>
                            <CourseCard courseName={course.courseName} courseType={course.coursePrice} shortDescrip={course.courseShortDescription} video={video1} cardFunction={() => handleViewCourse(course.id)} />
                        </Box>
                    ))}
                </Box>
                {/* <button onClick={handleViewCourses}>All Courses</button> */}
            </Grid>
        </Box>
    )
}

export default Courses
