import { Box } from "@mui/material";
import { FooterComp } from "../Components/Footer";
import { HeaderComp, HeaderSmallComp } from "../Components/HeaderComp";
import { NavBar } from "../Components/NavBar";
import Courses from "./Courses";
import ViewCourse from "./ViewCourse";
import UserPage from "./UserPage";

export default function User({signInUser}) {
    return (
        <>
            <NavBar location={"user"}/>
            {/* <HeaderComp /> */}
            <HeaderSmallComp />
            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>
                    {/* <Courses /> */}
                    {/* <ViewCourse /> */}
                    <UserPage signInUser={signInUser}/>
                </Box>
            </Box>
            <FooterComp />
        </>
    )
}