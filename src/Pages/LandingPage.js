import { Box, Container, Typography } from "@mui/material"
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
import { useEffect, useState } from "react"
const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";
function LandingPage() {

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
            cardImage: capsImg1
        },
        {
            courseName: "Intro to Calculus",
            courseType: "Free",
            shortDescrip: short,
            cardImage: capsImg2
        },
        {
            courseName: "Intro to probability",
            courseType: "Free",
            shortDescrip: short,
            cardImage: capsImg3
        },

        {
            courseName: "Intro to Geometry",
            courseType: "Free",
            shortDescrip: short,
            cardImage: iebImg1
        },
        {
            courseName: "Intro to Calculus",
            courseType: "Free",
            shortDescrip: short,
            cardImage: iebImg2
        },
        {
            courseName: "Intro to probability",
            courseType: "Free",
            shortDescrip: short,
            cardImage: iebImg3
        },

        {
            courseName: "Intro to business",
            courseType: "Free",
            shortDescrip: short,
            cardImage: entImg1
        },
        {
            courseName: "Intro to accounting",
            courseType: "Free",
            shortDescrip: short,
            cardImage: entImg2
        },
        {
            courseName: "Intro to finance",
            courseType: "Free",
            shortDescrip: short,
            cardImage: entImg3
        },

    ]

    const [viewCourses, setViewCourses] = useState([]);

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
                    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", marginTop: "70px" }}>
                        <Box sx={{ width: "50%", height: "530px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ width: "90%", height: "auto" }}>
                                <Typography variant="h2" sx={{ color: "primary.light", fontWeight: "bold" }}>Company Name</Typography>
                                <Typography variant="h4" sx={{ color: "primary.light", fontWeight: "600", }}>Company Slogan</Typography>
                                <Typography variant="body2" sx={{ margin: "30px 0" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla, et tincidunt sapien faucibus quis. Proin accumsan, tortor a luctus euismod, ex orci sodales nunc.
                                </Typography>
                                <HomeButtons text={"Join"} buttonFunction={""} />
                            </Box>
                        </Box>
                        <Box sx={{ width: "50%", height: "inherit", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                            <Box sx={{ width: "90%", height: "auto", position: "relative" }}>

                                <Box sx={{ height: "500px", width: "450px", opacity: "0.5", backgroundColor: "primary.light", borderRadius: "20px", zIndex: "10", marginLeft: "80px", marginTop: "30px" }} />
                                <img src={headerImage} alt="headerImage" style={{ height: "500px", width: "450px", objectFit: "cover", zIndex: "20", position: "absolute", top: "0", left: "50px", borderRadius: "20px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "60px", marginTop: "30px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Box sx={{ width: "85%", height: "100%", display: "flex", flexDirection: "row", marginLeft: "3%" }}>
                            <Box sx={{ width: "80%" }}>
                                <SearchBar />
                            </Box>
                            <Box sx={{ width: "20%", height: "100%", backgroundColor: "primary.light", display: "flex", justifyContent: "center", alignItems: "center", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", }}>
                                <Typography variant="subtitle1" sx={{ textAlign: "center", color: "white" }}>Search</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: "80px", marginBottom: "-30px", width: "90%", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "960px", height: "inherit", display: "flex", flexDirection: "row" }}>
                            {headCards.map((cont, index) => (
                                <Box key={index} sx={{ width: "300px", height: "inherit", backgroundColor: "primary.light", margin: "0 10px", display: "flex", flexDirection: "row" }}>
                                    <Box sx={{ width: "25%", height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={cont.iconN} alt="enrolled" style={{ width: "60px", height: "60px" }} />
                                    </Box>
                                    <Box sx={{ width: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ width: "100%", textAlign: "center", color: "white" }}>{cont.title}</Typography>
                                            <Typography variant="h4" sx={{ width: "100%", textAlign: "center", color: "white", fontWeight: "bold" }}>{`${addSpace(cont.numberC)}+`}</Typography>
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
                width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"
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
                            <Typography variant="h6" sx={{ padding: "0 15px", textAlign: "center" }}>CAPS</Typography>
                            <Typography variant="h6" sx={{ padding: "0 15px", textAlign: "center" }}>IEB</Typography>
                            <Typography variant="h6" sx={{ padding: "0 15px", textAlign: "center" }}>Entrepreneur </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                        {/* {viewCourses.map((course))} */}
                    </Box>

                </Box>
            </Box>
            {/* Body */}

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            {/* <HeaderComp/> */}
            {/* <FooterComp/> */}
        </>
    )
}
export default LandingPage