import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import logo from "../Assets/Images/logo2.png";
import { Image } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { SmallButton, ToUserButton } from "./Buttons";
import fbIcon from "../Assets/Icons/fb.png";
import insIcon from "../Assets/Icons/ins.png";
import twIcon from "../Assets/Icons/tw.png";

export const NavBar = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    function openNav() {
        console.log("Hello");
    }
    return (
        <>
            <div style={{ width: "100%", height: "100vh", backgroundColor: "gray" }}>
                {isSmallScreen ?
                    <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} onClick={openNav}> <MenuIcon sx={{ color: "#fff", width: "40px", height: "40px", marginLeft: "4%", marginTop: "4%" }} /></Button>
                    : null}
                <Box sx={{ width: isSmallScreen ? "90%" : "100%", height: isSmallScreen ? "100vh" : "120px", backgroundColor: "white" }}>
                    {isSmallScreen ? null :
                        <Box sx={{ width: "100%", height: isSmallScreen ? "7vh" : "35px", backgroundColor: "primary.light", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: isSmallScreen ? "start" : "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", width: isSmallScreen ? "95%" : "90%", justifyContent: isSmallScreen ? "start" : "end", alignItems: isSmallScreen ? "start" : "center", marginLeft: isSmallScreen ? "20px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>
                                <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", }}>
                                    <Typography sx={{ color: "white", marginRight: "5px", fontSize: "14px" }}>emailAddress@ezamazwe.com</Typography>
                                    <Typography sx={{ color: "white", marginLeft: isSmallScreen ? "0" : "5px", fontSize: "14px" }}>+012 000 0000</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                                    <Link sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }}><img src={fbIcon} alt="social" style={{ marginTop: "5px", width: "20px", height: "20px" }} /></Link>
                                    <Link sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }}><img src={insIcon} alt="social" style={{ marginTop: "5px", width: "20px", height: "20px" }} /></Link>
                                    <Link sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }}><img src={twIcon} alt="social" style={{ marginTop: "5px", width: "20px", height: "20px" }} /></Link>
                                </Box>
                            </Box>
                        </Box>
                    }
                    <Box sx={{ width: "100%", height: "90px", display: "flex", flexDirection:isSmallScreen ? "column" : "row" }}>
                        <Box sx={{ width: isSmallScreen ? "100%" : "20%", height: "100%", display: "flex", justifyContent:isSmallScreen ? "start" : "center", alignItems: "center" }}>
                            <img src={logo} style={{ width: "150px", marginLeft:isSmallScreen ? "20px" :"0" }} />
                        </Box>
                         <Box sx={{ width: isSmallScreen ? "100%" :"60%", height: "100px", display: "flex", justifyContent: isSmallScreen ? "start" :"center", alignItems: "center", marginTop:isSmallScreen ? "50px" :"0" }}>
                            <Box sx={{display:"flex", flexDirection:isSmallScreen ? "column" :"row"}}>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft:isSmallScreen ? "25px" : "0", marginTop:isSmallScreen ? "10px" : "0" }}>Home</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft:isSmallScreen ? "25px" : "0", marginTop:isSmallScreen ? "10px" : "0" }}>About Us</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft:isSmallScreen ? "25px" : "0", marginTop:isSmallScreen ? "10px" : "0" }}>Courses</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft:isSmallScreen ? "25px" : "0", marginTop:isSmallScreen ? "10px" : "0" }}>Tutors</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft:isSmallScreen ? "25px" : "0", marginTop:isSmallScreen ? "10px" : "0" }}>Contact Us</Link>
                            </Box>
                        </Box>
                        {/*<Box sx={{ width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <SmallButton text={"Sign In"} />
                                <ToUserButton />
                            </Box>
                        </Box> */}
                    </Box>
                </Box>
            </div>
        </>
    );
}