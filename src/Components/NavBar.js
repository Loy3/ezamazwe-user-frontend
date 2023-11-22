import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import logo from "../Assets/Images/logo2.png";
import { Image } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import { SmallButton, ToUserButton } from "./Buttons";
import fbIcon from "../Assets/Icons/fb.png";
import insIcon from "../Assets/Icons/ins.png";
import twIcon from "../Assets/Icons/tw.png";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const [navStatus, setNavStatus] = useState(false);

    useEffect(()=>{
        if (!isSmallScreen) {
            setNavStatus(true)
        }else{
            setNavStatus(false)
        }
    },[isSmallScreen])

    function handleNav(type) {
        switch (type) {
            case "open":
                setNavStatus(true)
                break;
            case "close":
                setNavStatus(false);
                console.log("Hello");
                break;
            default:
        }
    }
    return (
        <>
            <div style={{ width: "100%", height: "100vh", backgroundColor: "gray" }}>
                {isSmallScreen && !navStatus ?
                    <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} onClick={() => handleNav("open")}> <MenuIcon sx={{ color: "#fff", width: "40px", height: "40px", marginLeft: "4%", marginTop: "4%" }} /></Button>
                    :             
                    <Box sx={{ width: isSmallScreen ? "90%" : "100%", height: isSmallScreen ? "100vh" : "120px", backgroundColor: "white", position: "relative" }}>
                        {isSmallScreen ?
                            <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer", position: "absolute", right: "5px", top: "20px", zIndex:"50" }} onClick={() => handleNav("close")}> <CancelIcon sx={{ color: "primary.light", width: "30px", height: "30px" }} /></Button>
                            : null}
                        {isSmallScreen ? null :
                            <Box sx={{ width: "100%", height: isSmallScreen ? "7vh" : "35px", backgroundColor: "primary.light", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: isSmallScreen ? "start" : "center" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", width: isSmallScreen ? "95%" : "90%", justifyContent: isSmallScreen ? "start" : "end", alignItems: isSmallScreen ? "start" : "center", marginLeft: isSmallScreen ? "20px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>
                                    <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", }}>
                                        <Typography sx={{ color: "white", marginRight: "5px", fontSize: "14px" }}>emailAddress@ezamazwe.com</Typography>
                                        <Typography sx={{ color: "white", marginLeft: isSmallScreen ? "0" : "5px", fontSize: "14px" }}>+012 000 0000</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                                        <Link href="https://www.facebook.com/" sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} target="_blank"><img src={fbIcon} alt="social" style={{ marginTop: "5px", width: "20px", height: "20px" }} /></Link>
                                        <Link href="https://www.instagram.com/" sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} target="_blank"><img src={insIcon} alt="social" style={{ marginTop: "5px", width: "20px", height: "20px" }} /></Link>
                                        <Link href="https://twitter.com/" sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} target="_blank"><img src={twIcon} alt="social" style={{ marginTop: "5px", width: "20px", height: "20px" }} /></Link>
                                    </Box>
                                </Box>
                            </Box>
                        }
                        <Box sx={{ width: "100%", height: isSmallScreen ? "100%" : "90px", display: "flex", flexDirection: isSmallScreen ? "column" : "row", position: "relative" }}>
                            <Box sx={{ width: isSmallScreen ? "100%" : "20%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: "center" }}>
                                <img src={logo} style={{ width: "150px", marginLeft: isSmallScreen ? "20px" : "0" }} />
                            </Box>
                            <Box sx={{ width: isSmallScreen ? "100%" : "60%", height: "100px", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: "center", marginTop: isSmallScreen ? "50px" : "0" }}>
                                <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row" }}>
                                    <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>Home</Link>
                                    <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>About Us</Link>
                                    <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>Courses</Link>
                                    <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>Tutors</Link>
                                    <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>Contact Us</Link>
                                </Box>
                            </Box>
                            <Box sx={{ width: isSmallScreen ? "100%" : "20%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: isSmallScreen ? "50px" : "0", position: isSmallScreen ? "absolute" : "relative", bottom: isSmallScreen ? "50px" : "unset" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: isSmallScreen ? "20px" : "0" }}>
                                    <SmallButton text={"Sign In"} />
                                    <ToUserButton />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    }
            </div>
        </>
    );
}