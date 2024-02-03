import { Box, Typography, useMediaQuery } from "@mui/material"
import { FooterComp } from "../Components/Footer"
// import { HeaderComp } from "../Components/HeaderComp"
import { NavBar } from "../Components/NavBar"
import { HomeButtons } from "../Components/Buttons"
import headerImage from "../Assets/Images/headerImage.jpg";
import { SearchBar } from "../Components/SearchBar"
import { useNavigate } from 'react-router-dom';
import enrolledStuIcon from "../Assets/Icons/st.png";
import onCoursesIcon from "../Assets/Icons/co.png";
import tutorsIcon from "../Assets/Icons/tu.png";
import SectionHeading from "../Components/SectionHeading"
import SectionSubHeading from "../Components/SectionSubHeading"

import capsImg1 from "../Assets/Images/cardsImages/caps1.jpg";
import capsImg2 from "../Assets/Images/cardsImages/caps2.jpg";
import capsImg3 from "../Assets/Images/cardsImages/caps3.jpg";

import iebImg1 from "../Assets/Images/cardsImages/ieb1.jpg";
import iebImg2 from "../Assets/Images/cardsImages/ieb2.jpg";
import iebImg3 from "../Assets/Images/cardsImages/ieb3.jpg";

import entImg1 from "../Assets/Images/cardsImages/ent1.jpg";
import entImg2 from "../Assets/Images/cardsImages/ent2.jpg";
import entImg3 from "../Assets/Images/cardsImages/ent3.jpg";

import tutorImage from "../Assets/Images/tutor.jpg";

import impactVid1 from "../Assets/Videos/1.mp4";
import impactVid2 from "../Assets/Videos/2.mp4";
import impactVid3 from "../Assets/Videos/3.mp4";
import impactVid4 from "../Assets/Videos/4.mp4";

import { useEffect, useMemo, useState } from "react"
import { CourseContCard } from "../Components/Cards"
import { auth, db } from "../Services/firebaseConfig";
import { collection, getCountFromServer, getDocs, orderBy, query, where } from "firebase/firestore";
import { fetchCourseData, fetchCourseLessons, fetchLessonTopics, fetchRecentCategoryCourses } from "../Services/CourseService";
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";



function LandingPage() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    const isMedToLaScreen = useMediaQuery("(max-width:1024px) and (min-width:800px)");
    const isSecMediumScreen = useMediaQuery("(max-width:800px) and (min-width:600px)");
    const [numberOfCourses, setNumberOfCourses] = useState(0)
    const [numberOfStudents, setNumberOfStudents] = useState(0)
    const navigate = useNavigate();
    const headCards = useMemo(() => {
        return [
            {
                iconN: enrolledStuIcon,
                title: "Enrolled Students",
                numberC: numberOfStudents
            },
            {
                iconN: onCoursesIcon,
                title: "Online Courses",
                numberC: numberOfCourses
            },
            {
                iconN: tutorsIcon,
                title: "Expert Tutors",
                numberC: "0"
            }
        ]
    }, [])
    useEffect(() => {
        handleCategory('caps')
        fetchStats()
    }, [])
    const fetchStats = async () => {
        const studentsColRef = collection(db, 'users')
        const studentQry = query(studentsColRef, where('role', '==', 'user'))
        const studentsSnapshot = await getCountFromServer(studentQry)
        const studentCount = studentsSnapshot.data().count
        console.log({ studentCount });
        setNumberOfStudents(studentCount)

        const coursesColRef = collection(db, 'courses')
        const courseQry = query(coursesColRef)
        const courseSnapshot = await getCountFromServer(courseQry)
        const courseCount = courseSnapshot.data().count
        console.log({ courseCount });
        setNumberOfCourses(courseCount)
    }
    const newCoursesCards = useMemo(() => {
        return [
            {
                courseName: "Intro to Geometry",
                courseType: "Free",
                shortDescrip: short,
                cardImage: capsImg1,
                type: "caps"
            },
            {
                courseName: "Intro to Calculus",
                courseType: "Free",
                shortDescrip: short,
                cardImage: capsImg2,
                type: "caps"
            },
            {
                courseName: "Intro to probability",
                courseType: "Free",
                shortDescrip: short,
                cardImage: capsImg3,
                type: "caps"
            },

            {
                courseName: "Intro to Geometry",
                courseType: "Free",
                shortDescrip: short,
                cardImage: iebImg1,
                type: "ieb"
            },
            {
                courseName: "Intro to Calculus",
                courseType: "Free",
                shortDescrip: short,
                cardImage: iebImg2,
                type: "ieb"
            },
            {
                courseName: "Intro to probability",
                courseType: "Free",
                shortDescrip: short,
                cardImage: iebImg3,
                type: "ieb"
            },

            {
                courseName: "Intro to business",
                courseType: "Free",
                shortDescrip: short,
                cardImage: entImg1,
                type: "ent"
            },
            {
                courseName: "Intro to accounting",
                courseType: "Free",
                shortDescrip: short,
                cardImage: entImg2,
                type: "ent"
            },
            {
                courseName: "Intro to finance",
                courseType: "Free",
                shortDescrip: short,
                cardImage: entImg3,
                type: "ent"
            },

        ]
    }, [])

    const impactVideos = [impactVid1, impactVid2, impactVid3, impactVid4];

    const withBorder = "2px solid #396781";
    const withNoBorder = "none";
    const [viewCourses, setViewCourses] = useState([]);
    const [capsBorder, setCapsBorder] = useState(withBorder);
    const [iebBorder, setIebBorder] = useState(withNoBorder);
    const [entBorder, setEntBorder] = useState(withNoBorder);
    const [join, setJoin] = useState(false);
    const handleViewCourse = async (event, id, name, course) => {
        event.preventDefault();
        // const [course_data] = courses.filter((course) => course.id === id);
        console.log('course clicked: ', { id, name, course });
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
    useEffect(() => {
        let viewArr = [];

        for (let x = 0; x < 3; x++) {
            viewArr.push(newCoursesCards[x]);
        }
        // console.log(viewArr);
        setViewCourses(viewArr);
    }, [newCoursesCards])


    function addSpace(num) {
        const numConvert = parseInt(num);
        return numConvert.toLocaleString()
    }

    async function handleCategory(type) {
        let displayArr = [];
        console.log({ type });
        switch (type) {
            case "caps":
                setCapsBorder(withBorder);
                setIebBorder(withNoBorder);
                setEntBorder(withNoBorder);
                break;

            case "ieb":
                setCapsBorder(withNoBorder);
                setIebBorder(withBorder);
                setEntBorder(withNoBorder);
                break;

            case "Entrepreneur":
                setCapsBorder(withNoBorder);
                setIebBorder(withNoBorder);
                setEntBorder(withBorder);
                break;
            default:
        }
        const recentFilteredCourses = await fetchRecentCategoryCourses(type, entImg1)
        setViewCourses(recentFilteredCourses)
    }

    useEffect(() => {
        const checkAuth = (auth);
        // console.log(auth);
        const unsubscribe = checkAuth.onAuthStateChanged((user) => {
            if (user !== null) {
                setJoin(true)
            } else {
                setJoin(false);
            }
        });
        return () => unsubscribe();
    }, []);

    function toSignUp() {
        if (join) {
            alert("You already have an account, checkout our courses.");
            navigate("/courses")
        } else {
            alert("Lets create an account.");
            navigate("/signup")
        }
    }

    return (
        <>
            {/* Header & Nav */}
            <NavBar location={"home"} />
            <Box sx={{
                width: "100%", height: "auto", backgroundColor: "rgba(198, 208, 214, 0.40)", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>
                    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: isMediumScreen ? "column" : "row", marginTop: "70px" }}>
                        <Box sx={{ width: isMediumScreen ? "100%" : "50%", height: isMediumScreen ? "auto" : "480px", display: "flex", justifyContent: isMediumScreen ? "center" : "end", alignItems: "center", }}>
                            <Box sx={{ width: isMediumScreen ? "90%" : "80%", height: "auto" }}>
                                <Typography variant={isSmallScreen ? "h4" : "h3"} sx={{ color: "primary.light", fontWeight: "bold", textAlign: isMediumScreen ? "center" : "left" }}>Ezamazwe Edutech </Typography>
                                <Typography variant={isSmallScreen ? "h5" : "h4"} sx={{ color: "primary.light", fontWeight: "600", marginTop: "5px", textAlign: isMediumScreen ? "center" : "left" }}>Center for Innovation</Typography>
                                <Typography variant="body2" sx={{ margin: "30px 10px", textAlign: isMediumScreen ? "center" : "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan, tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: isMediumScreen ? "center" : "start", alignItems: "center", marginTop: "15px" }}>
                                    <Box sx={{ width: isSmallScreen ? "70%" : "35%" }}>
                                        <HomeButtons text={"Join"} buttonFunction={toSignUp} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: isMediumScreen ? "100%" : "50%", height: isSmallScreen ? "auto" : "inherit", display: isMediumScreen ? "none" : "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                            <Box sx={{ width: "90%", height: "auto", position: "relative" }}>

                                <Box sx={{ height: isMedToLaScreen ? "350px" : "450px", width: isMedToLaScreen ? "300px" : "400px", opacity: "0.5", backgroundColor: "primary.light", borderRadius: "20px", zIndex: "10", marginLeft: isMedToLaScreen ? "40px" : "80px", marginTop: isMedToLaScreen ? "60px" : "30px" }} />
                                <img src={headerImage} alt="headerImage" style={{ height: isMedToLaScreen ? "350px" : "450px", width: isMedToLaScreen ? "300px" : "400px", objectFit: "cover", zIndex: "20", position: "absolute", top: isMedToLaScreen ? "20px" : "0", left: isMedToLaScreen ? "20px" : "50px", borderRadius: "20px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "60px", marginTop: isSmallScreen ? "50px" : "100px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                        <Box sx={{ width: isSmallScreen ? "90%" : "80%", height: "100%", display: "flex", flexDirection: "row", position: "relative" }}>
                            <Box sx={{ width: "80%" }}>
                                <SearchBar />
                            </Box>
                            <Box sx={{ width: "20%", height: "100%", backgroundColor: "primary.light", display: "flex", justifyContent: "center", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", position: "absolute", right: "0" }}>
                                <Typography variant={isSmallScreen ? "body2" : "subtitle1"} sx={{ textAlign: "center", color: "white" }}>Search</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: isMediumScreen ? "50px" : "80px", marginBottom: "-30px", width: "100%", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: isMediumScreen ? "94%" : "960px", height: "inherit", display: "flex", flexDirection: "row" }}>
                            <Box sx={{ width: isMediumScreen ? "30%" : "300px", height: isMediumScreen ? "90px" : "inherit", backgroundColor: "primary.light", margin: isMediumScreen ? "0 5px" : "0 10px", display: "flex", flexDirection: isMediumScreen ? "column" : "row", borderRadius: "20px" }}>
                                <Box sx={{ width: isMediumScreen ? "100%" : "25%", height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={enrolledStuIcon} alt="enrolled" style={{ width: isMediumScreen ? "30px" : "60px", height: isMediumScreen ? "30px" : "60px", paddingTop: isMediumScreen ? "5px" : "0" }} />
                                </Box>
                                <Box sx={{ width: isMediumScreen ? "100%" : "75%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: isMediumScreen ? "5px" : "0" }}>
                                    <Box>
                                        <Typography variant={isMediumScreen ? "body2" : "subtitle1"} sx={{ width: "100%", textAlign: "center", color: "white", fontSize: isMediumScreen ? "11px" : "16px", marginTop: isMediumScreen ? "5px" : "0" }}>{"Enrolled Students"}</Typography>
                                        <Typography variant={isMediumScreen ? "h6" : "h4"} sx={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold" }}>{`${addSpace(numberOfStudents)}`}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: isMediumScreen ? "30%" : "300px", height: isMediumScreen ? "90px" : "inherit", backgroundColor: "primary.light", margin: isMediumScreen ? "0 5px" : "0 10px", display: "flex", flexDirection: isMediumScreen ? "column" : "row", borderRadius: "20px" }}>
                                <Box sx={{ width: isMediumScreen ? "100%" : "25%", height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={onCoursesIcon} alt="enrolled" style={{ width: isMediumScreen ? "30px" : "60px", height: isMediumScreen ? "30px" : "60px", paddingTop: isMediumScreen ? "5px" : "0" }} />
                                </Box>
                                <Box sx={{ width: isMediumScreen ? "100%" : "75%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: isMediumScreen ? "5px" : "0" }}>

                                    <Box>
                                        <Typography variant={isMediumScreen ? "body2" : "subtitle1"} sx={{ width: "100%", textAlign: "center", color: "white", fontSize: isMediumScreen ? "11px" : "16px", marginTop: isMediumScreen ? "5px" : "0" }}>{"Online Courses"}</Typography>
                                        <Typography variant={isMediumScreen ? "h6" : "h4"} sx={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold" }}>{`${addSpace(numberOfCourses)}`}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box  sx={{ width: isMediumScreen ? "30%" : "300px", height: isMediumScreen ? "90px" : "inherit", backgroundColor: "primary.light", margin: isMediumScreen ? "0 5px" : "0 10px", display: "flex", flexDirection: isMediumScreen ? "column" : "row", borderRadius: "20px" }}>
                                <Box sx={{ width: isMediumScreen ? "100%" : "25%", height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={tutorsIcon} alt="enrolled" style={{ width: isMediumScreen ? "30px" : "60px", height: isMediumScreen ? "30px" : "60px", paddingTop: isMediumScreen ? "5px" : "0" }} />
                                </Box>
                                <Box sx={{ width: isMediumScreen ? "100%" : "75%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: isMediumScreen ? "5px" : "0" }}>
                                    <Box>
                                        <Typography variant={isMediumScreen ? "body2" : "subtitle1"} sx={{ width: "100%", textAlign: "center", color: "white", fontSize: isMediumScreen ? "11px" : "16px", marginTop: isMediumScreen ? "5px" : "0" }}>{"Expert Tutors"}</Typography>
                                        <Typography variant={isMediumScreen ? "h6" : "h4"} sx={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold" }}>{`${addSpace(0)}`}</Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                </Box>
            </Box>
            {/* Header & Nav */}

            {/* Body */}
            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "50px"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>

                    <Box sx={{ width: "100%", marginTop: "100px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SectionHeading children={"Newly Added Courses"} />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SectionSubHeading children={"Something new in our categories."} />
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", marginTop: "50px", display: "flex", justifyContent: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant={isSmallScreen ? "body1" : "h6"} sx={{ padding: "0 15px", textAlign: "center", cursor: "pointer", borderBottom: `${capsBorder}` }} onClick={() => handleCategory("caps")}>CAPS</Typography>
                            <Typography variant={isSmallScreen ? "body1" : "h6"} sx={{ padding: "0 15px", textAlign: "center", cursor: "pointer", borderBottom: `${iebBorder}` }} onClick={() => handleCategory("ieb")}>IEB</Typography>
                            <Typography variant={isSmallScreen ? "body1" : "h6"} sx={{ padding: "0 15px", textAlign: "center", cursor: "pointer", borderBottom: `${entBorder}` }} onClick={() => handleCategory("Entrepreneur")}>Entrepreneur </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ widtt: "100%", display: "flex", justifyContent: "center", marginTop: "70px" }}>
                        <Box sx={{ width: "90%", display: "flex", flexDirection: isSmallScreen ? "column" : "row", flexWrap: "wrap" }}>
                            {isSecMediumScreen ?
                                <>
                                    {
                                        viewCourses.map((course, index) => (
                                            <Box key={index} sx={{ width: "47%", margin: isSmallScreen ? "10px 0" : "10px" }}>
                                                <CourseContCard courseName={course.courseName} courseType={course.courseType} shortDescrip={course.courseShortDescription} image={course.cardImage} onClick={(event) => handleViewCourse(event, course.id, course.courseName, course ) } />
                                            </Box>
                                        ))
                                    }
                                </>
                                :
                                <>
                                    {
                                        viewCourses.map((course, index) => (
                                            <Box key={index} sx={{ width: isSmallScreen ? "100%" : "31%", margin: isSmallScreen ? "10px 0" : "10px" }}>
                                                <CourseContCard courseName={course.courseName} courseType={course.courseType} shortDescrip={course.courseShortDescription} image={course.cardImage} onClick={(event) => handleViewCourse(event, course.id, course.courseName, course )}/>
                                            </Box>
                                        ))
                                    }
                                </>
                            }
                        </Box>
                    </Box>

                </Box>
            </Box>

            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "greys.light", marginTop: "50px", padding: "50px 0"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>
                    <Box sx={{ width: "100%", display: "flex", flexDirection: isMediumScreen ? "column" : "row" }}>
                        <Box sx={{ width: isMediumScreen ? "94%" : "50%", height: isMediumScreen ? "400px" : "500px", display: "flex", justifyContent: "center", alignItems: "center", margin: "3%" }}>
                            <img src={tutorImage} alt="tutor" style={{ width: isMediumScreen ? "100%" : "400px", height: isMediumScreen ? "100%" : "400px", objectFit: "cover", boxShadow: "0px 2px 20px 2px #1C3F53" }} />
                        </Box>
                        <Box sx={{ width: isMediumScreen ? "100%" : "50%", height: "inherit", display: "flex", justifyContent: isMediumScreen ? "center" : "start", alignItems: "center", marginTop: isMediumScreen ? "30px" : "0" }}>
                            <Box sx={{ width: "100%", height: "auto", }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: isMediumScreen ? "center" : "start", alignItems: "center" }}>
                                    <SectionHeading children={"Become a Tutor"} />
                                </Box>
                                <Typography variant="body1" sx={{ width: "80%", marginTop: "15px", textAlign: isMediumScreen ? "center" : "left", marginLeft: isMediumScreen ? "10%" : "0" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan,
                                    tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: isMediumScreen ? "center" : "start", alignItems: "center", marginTop: "15px" }}>
                                    <Box sx={{ width: isSmallScreen ? "70%" : "35%", marginLeft: "0" }}>
                                        <HomeButtons text={"Join"} buttonFunction={toSignUp} />
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box >

            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "50px"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>

                    <Box sx={{ width: "100%", marginTop: "100px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SectionHeading children={"Our Impact"} />
                        </Box>
                        <Box sx={{ width: isSmallScreen ? "86%" : "60%", display: "flex", justifyContent: "center", alignItems: "center", margin: isSmallScreen ? "5px 7%" : "5px 20%" }}>
                            {isSmallScreen ?
                                <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "center" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan, tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                                :
                                <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "center" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan, tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                            }
                        </Box>

                        <Box sx={{ width: "94%", height: "auto", margin: "100px 3% 50px 3%", display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>

                            {/* <video
                                // autoPlay
                                controls
                                // loop
                                // muted
                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}>
                                <source
                                    src={impactVid3}
                                    type="video/mp4"
                                />
                            </video> */}

                            <>
                                {impactVideos.map((vid, index) => (
                                    <Box key={index} sx={{ width: isSmallScreen ? "94%" : "24%", height: "30vh", margin: isSmallScreen ? "10px 3%" : "10px 0.5%" }}>
                                        <video
                                            controls
                                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}>
                                            <source
                                                src={vid}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </Box>
                                ))}
                            </>


                            {/* <video flexWrap: "wrap"
                        muted
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video> */}
                        </Box>
                    </Box>

                </Box>
            </Box>
            {/* Body */}
            <FooterComp />
            {/* < br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />< br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            < br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />< br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}

            {/* <HeaderComp/> */}

        </>
    )
}
export default LandingPage