import { Box } from "@mui/material";
import { FooterComp } from "../Components/Footer";
import { HeaderComp, HeaderSmallComp } from "../Components/HeaderComp";
import { NavBar } from "../Components/NavBar";
import Courses from "./Courses";
import ViewCourse from "./ViewCourse";
import UserPage from "./UserPage";
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla."
export default function CoursesPage() {
    return (
        <>
            <NavBar />
            <HeaderComp text={"Courses"} paragraph={paragraph} />
            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>
                    <Courses />

                </Box>
            </Box>
            <FooterComp />
        </>
    )
}