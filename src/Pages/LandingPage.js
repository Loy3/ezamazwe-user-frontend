import { Box, Container, Typography } from "@mui/material"
import { FooterComp } from "../Components/Footer"
import { HeaderComp } from "../Components/HeaderComp"
import { NavBar } from "../Components/NavBar"
import { HomeButtons } from "../Components/Buttons"
import headerImage from "../Assets/Images/headerImage.jpg";



function LandingPage() {
    return (
        <>
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
                    <Box sx={{ width: "100%", height: "60px", backgroundColor: "greys.dark", marginTop: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "90%", height: "100%", backgroundColor: "greys.main" }}>
                            {/* Input */}
                            {/* button */}
                        </Box>
                    </Box>

                </Box>

            </Box>


            {/* <HeaderComp/> */}
            {/* <FooterComp/> */}
        </>
    )
}
export default LandingPage