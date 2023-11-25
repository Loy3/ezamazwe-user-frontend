import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import { FooterComp } from "../Components/Footer"
import { HeaderComp } from "../Components/HeaderComp"
import { NavBar } from "../Components/NavBar"
import { HomeButtons } from "../Components/Buttons"
import headerImage from "../Assets/Images/headerImage.jpg";
import { SearchBar } from "../Components/SearchBar"

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

import { useEffect, useState } from "react"
import { CourseContCard } from "../Components/Cards"
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";
function LandingPage() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    const headCards = [
        {
            iconN: enrolledStuIcon,
            title: "Enrolled Students",
            numberC: "10000"
        },
        {
            iconN: onCoursesIcon,
            title: "Online Courses",
            numberC: "10000"
        },
        {
            iconN: tutorsIcon,
            title: "Expert Tutors",
            numberC: "10000"
        }
    ]

    const newCoursesCards = [
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
    const withBorder = "2px solid #396781";
    const withNoBorder = "none";
    const [viewCourses, setViewCourses] = useState([]);
    const [capsBorder, setCapsBorder] = useState(withBorder);
    const [iebBorder, setIebBorder] = useState(withNoBorder);
    const [entBorder, setEntBorder] = useState(withNoBorder);

    useEffect(() => {
        let viewArr = [];

        for (let x = 0; x < 3; x++) {
            viewArr.push(newCoursesCards[x]);
        }
        // console.log(viewArr);
        setViewCourses(viewArr)
    }, [])


    function addSpace(num) {
        const numConvert = parseInt(num);
        return numConvert.toLocaleString()
    }

    function handleCategory(type) {
        let displayArr = [];
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

            case "ent":
                setCapsBorder(withNoBorder);
                setIebBorder(withNoBorder);
                setEntBorder(withBorder);
                break;
            default:
        }
        newCoursesCards.forEach(c => {
            if (c.type === type) {
                displayArr.push(c);
            }
        });
        setViewCourses(displayArr);
    }

    return (
        <>
            {/* Header & Nav */}
            <NavBar />
            <Box sx={{
                width: "100%", height: "auto", backgroundColor: "rgba(198, 208, 214, 0.40)", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>
                    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: isSmallScreen ? "column" : "row", marginTop: "70px" }}>
                        <Box sx={{ width: isSmallScreen ? "100%" : "50%", height: isSmallScreen ? "auto" : "480px", display: "flex", justifyContent: isSmallScreen ? "center" : "end", alignItems: "center", }}>
                            <Box sx={{ width: isSmallScreen ? "90%" : "80%", height: "auto" }}>
                                <Typography variant={isSmallScreen ? "h4" : "h3"} sx={{ color: "primary.light", fontWeight: "bold", textAlign: isSmallScreen ? "center" : "left" }}>Company Name</Typography>
                                <Typography variant={isSmallScreen ? "h5" : "h4"} sx={{ color: "primary.light", fontWeight: "600", marginTop: "5px", textAlign: isSmallScreen ? "center" : "left" }}>Company Slogan</Typography>
                                <Typography variant="body2" sx={{ margin: "30px 10px", textAlign: isSmallScreen ? "center" : "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan, tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                                <HomeButtons text={"Join"} buttonFunction={""} />
                            </Box>
                        </Box>
                        <Box sx={{ width: isSmallScreen ? "100%" : "50%", height: isSmallScreen ? "auto" : "inherit", display: isSmallScreen ? "none" : "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                            <Box sx={{ width: "90%", height: "auto", position: "relative" }}>

                                <Box sx={{ height: isSmallScreen ? "350px" : "450px", width: isSmallScreen ? "300px" : "400px", opacity: "0.5", backgroundColor: "primary.light", borderRadius: "20px", zIndex: "10", marginLeft: isSmallScreen ? "30px" : "80px", marginTop: "30px" }} />
                                <img src={headerImage} alt="headerImage" style={{ height: isSmallScreen ? "350px" : "450px", width: isSmallScreen ? "300px" : "400px", objectFit: "cover", zIndex: "20", position: "absolute", top: "0", left: isSmallScreen ? "0" : "50px", borderRadius: "20px" }} />
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
                    <Box sx={{ marginTop: isSmallScreen ? "50px" : "80px", marginBottom: "-30px", width: "100%", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: isSmallScreen ? "94%" : "960px", height: "inherit", display: "flex", flexDirection: "row" }}>
                            {headCards.map((cont, index) => (
                                <Box key={index} sx={{ width: isSmallScreen ? "30%" : "300px", height: "inherit", backgroundColor: "primary.light", margin: isSmallScreen ? "0 5px" : "0 10px", display: "flex", flexDirection: isSmallScreen ? "column" : "row", borderRadius: "20px" }}>
                                    <Box sx={{ width: "100%", height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={cont.iconN} alt="enrolled" style={{ width: isSmallScreen ? "30px" : "60px", height: isSmallScreen ? "30px" : "60px", paddingTop: isSmallScreen ? "5px" : "0" }} />
                                    </Box>
                                    <Box sx={{ width: isSmallScreen ? "100%" : "75%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: isSmallScreen ? "5px" : "0" }}>
                                        <Box>
                                            <Typography variant={isSmallScreen ? "body2" : "subtitle1"} sx={{ width: "100%", textAlign: "center", color: "white", fontSize: isSmallScreen ? "11px" : "16px", marginTop: isSmallScreen ? "5px" : "0" }}>{cont.title}</Typography>
                                            <Typography variant="h4" sx={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold", fontSize: isSmallScreen ? "16px" : "20px" }}>{`${addSpace(cont.numberC)}+`}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}


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
                            <Typography variant={isSmallScreen ? "body1" : "h6"} sx={{ padding: "0 15px", textAlign: "center", cursor: "pointer", borderBottom: `${entBorder}` }} onClick={() => handleCategory("ent")}>Entrepreneur </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ widtt: "100%", display: "flex", justifyContent: "center", marginTop: "70px" }}>
                        <Box sx={{ width: "90%", display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>
                            {viewCourses.map((course, index) => (
                                <Box key={index} sx={{ width: isSmallScreen ? "100%" : "31%", margin: isSmallScreen ? "10px 0" : "10px" }}>
                                    <CourseContCard courseName={course.courseName} courseType={course.courseType} shortDescrip={course.shortDescrip} image={course.cardImage} />
                                </Box>
                            ))}
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
                    <Box sx={{ width: "100%", display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>
                        <Box sx={{ width: isSmallScreen ? "94%" : "50%", height: isSmallScreen ? "250px" : "500px", display: "flex", justifyContent: "center", alignItems: "center", margin: isSmallScreen ? "3%" : "0" }}>
                            <img src={tutorImage} alt="tutor" style={{ width: isSmallScreen ? "100%" : "400px", height: isSmallScreen ? "100%" : "400px", objectFit: "cover", boxShadow: "0px 2px 20px 2px #1C3F53" }} />
                        </Box>
                        <Box sx={{ width: isSmallScreen ? "100%" : "50%", height: "inherit", display: "flex", justifyContent: isSmallScreen ? "center" : "start", alignItems: "center", marginTop: isSmallScreen ? "30px" : "0" }}>
                            <Box sx={{ width: "100%", height: "auto", }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: isSmallScreen ? "center" : "start", alignItems: "center" }}>
                                    <SectionHeading children={"Become a Tutor"} />
                                </Box>
                                <Typography variant="body1" sx={{ width: "80%", marginTop: "15px", textAlign: isSmallScreen ? "center" : "left", marginLeft: isSmallScreen ? "10%" : "0" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan,
                                    tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", marginTop: "15px" }}>
                                    <HomeButtons text={"Join"} buttonFunction={""} />
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
                        <Box sx={{ width: "60%", display: "flex", justifyContent: "center", alignItems: "center", margin: "5px 20%" }}>
                            <SectionSubHeading children={""} style={{}} />
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
                    </Box>

                </Box>
            </Box>
            {/* Body */}

            < br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />< br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            < br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />< br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            {/* <HeaderComp/> */}
            {/* <FooterComp/> */}
        </>
    )
}
export default LandingPage