import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import logo from "../Assets/Images/logo2.png";
import { Image } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import { SignOutBtn, SmallButton, ToSignInUserButton, ToSignInUserButton2, ToUserButton } from "./Buttons";
import fbIcon from "../Assets/Icons/fb.png";
import insIcon from "../Assets/Icons/ins.png";
import twIcon from "../Assets/Icons/tw.png";
import { useEffect, useState } from "react";
import { auth, db } from "../Services/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const [navStatus, setNavStatus] = useState(false);
    const [isSignedIn, setSignIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [userMail, setUserMail] = useState("");
    const [mypath, setPath] = useState("");
    const [signInStatus, setSignInStatus] = useState(false);
    const [signInUser, setSignInUser] = useState(null)
    useEffect(() => {
        const checkAuth = (auth);
        // console.log(auth);
        const unsubscribe = checkAuth.onAuthStateChanged((user) => {
            if (user !== null) {
                // console.log(user.uid)
                setUserId(user.uid);
                setUserMail(user.email);

                setUserPath(user.uid)
            }
        });
        return () => unsubscribe();
    }, []);

    async function setUserPath(docId) {
        const docRef = doc(collection(db, "users"), docId);
        const docSnap = await getDoc(docRef);
        // console.log(docId);
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setSignInUser(docSnap.data());
            setSignIn(true);
        } else {
            setSignIn(false);
        }
    }

    useEffect(() => {
        if (!isSmallScreen) {
            setNavStatus(true)
        } else {
            setNavStatus(false)
        }
    }, [isSmallScreen])

    function handleNav(type) {
        switch (type) {
            case "open":
                setNavStatus(true)
                break;
            case "close":
                setNavStatus(false);
                break;
            default:
        }
    }

    function getFirstInit(name) {
        let letter = name.charAt(0);
        return letter;
    }

    function handleNavigation(type) {
        switch (type) {
            case "home":
                navigate("/");
                break;
            case "about":
                // navigate("");
                console.log("About");
                break;
            case "courses":
                navigate("/courses");
                break;
            case "tutors":
                // navigate("");
                console.log("Tutors");
                break;
            case "contact":
                // navigate("");
                console.log("contact us");
                break;
        }
    }
    function signIn() {
            navigate("/signin");
    }
    function signOut() {
        auth.signOut().then(() => {
         console.log("Success");
        }).catch((error) => {
            console.log(error.message);
            navigate("/")
        });

        window.location.reload();
    }
    return (
        <>
            {/* <div style={{ width: "100%", height: "100vh", backgroundColor: "gray" }}> */}
            {isSmallScreen && !navStatus ?
                <Box sx={{ position: "absolute", zIndex: "60" }}>
                    <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} onClick={() => handleNav("open")}> <MenuIcon sx={{ color: "#fff", width: "40px", height: "40px", marginLeft: "4%", marginTop: "4%" }} /></Button>
                </Box>
                :
                <Box sx={{ width: isSmallScreen ? "100%" : "100%", height: isSmallScreen ? "100vh" : "120px", backgroundColor: "white", position: isSmallScreen ? "fixed" : "relative", zIndex: isSmallScreen ? "80" : "0" }}>
                    {isSmallScreen ?
                        <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer", position: "absolute", right: "5px", top: "20px", zIndex: "50" }} onClick={() => handleNav("close")}> <CancelIcon sx={{ color: "primary.light", width: "30px", height: "30px" }} /></Button>
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
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }} onClick={() => handleNavigation("home")}>Home</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }} onClick={() => handleNavigation("about")}>About Us</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }} onClick={() => handleNavigation("courses")}>Courses</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }} onClick={() => handleNavigation("tutors")}>Tutors</Link>
                                <Link sx={{ textDecoration: "none", padding: "0 10px", color: "black", cursor: "pointer", marginLeft: isSmallScreen ? "25px" : "0", marginTop: isSmallScreen ? "10px" : "0" }} onClick={() => handleNavigation("contact")}>Contact Us</Link>
                            </Box>
                        </Box>
                        <Box sx={{ width: isSmallScreen ? "100%" : "20%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: isSmallScreen ? "50px" : "0", position: isSmallScreen ? "absolute" : "relative", bottom: isSmallScreen ? "50px" : "unset" }}>
                            {!isSignedIn ?
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: isSmallScreen ? "20px" : "0" }}>
                                    <SmallButton text={"Sign In"} buttonFunction={signIn}/>
                                    <ToUserButton isSignedIn={isSignedIn} />
                                </Box>
                                :
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: isSmallScreen ? "20px" : "0" }}>
                                    <ToSignInUserButton text={getFirstInit(signInUser.firstName)} />
                                    {/* <SignOutBtn text={"Sign Out"} buttonFunction={signOut}/> */}
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>
            }
            {/* </div> */}
        </>
    );
}



export const CourseNavBar = ({courseName}) => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const [navStatus, setNavStatus] = useState(false);
    const [isSignedIn, setSignIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [userMail, setUserMail] = useState("");
    const [mypath, setPath] = useState("");
    const [signInStatus, setSignInStatus] = useState(false);
    const [signInUser, setSignInUser] = useState(null)
    useEffect(() => {
        const checkAuth = (auth);
        // console.log(auth);
        const unsubscribe = checkAuth.onAuthStateChanged((user) => {
            if (user !== null) {
                // console.log(user.uid)
                setUserId(user.uid);
                setUserMail(user.email);

                setUserPath(user.uid)
            }
        });
        return () => unsubscribe();
    }, []);

    async function setUserPath(docId) {
        const docRef = doc(collection(db, "users"), docId);
        const docSnap = await getDoc(docRef);
        // console.log(docId);
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setSignInUser(docSnap.data());
            setSignIn(true);
        } else {
            setSignIn(false);
        }
    }

    useEffect(() => {
        if (!isSmallScreen) {
            setNavStatus(true)
        } else {
            setNavStatus(false)
        }
    }, [isSmallScreen])

    function handleNav(type) {
        switch (type) {
            case "open":
                setNavStatus(true)
                break;
            case "close":
                setNavStatus(false);
                break;
            default:
        }
    }

    function getFirstInit(name) {
        let letter = name.charAt(0);
        return letter;
    }

    function handleNavigation(type) {
        switch (type) {
            case "home":
                navigate("/");
                break;
            case "about":
                // navigate("");
                console.log("About");
                break;
            case "courses":
                navigate("/courses");
                break;
            case "tutors":
                // navigate("");
                console.log("Tutors");
                break;
            case "contact":
                // navigate("");
                console.log("contact us");
                break;
        }
    }
    return (
        <>
            {/* <div style={{ width: "100%", height: "100vh", backgroundColor: "gray" }}> */}

            <Box sx={{ width: "100%", height: "90px", backgroundColor: "primary.light", position: isSmallScreen ? "fixed" : "relative", zIndex: isSmallScreen ? "80" : "0" }}>
                <Box sx={{ width: "100%", height: isSmallScreen ? "100%" : "90px", display: "flex", flexDirection: isSmallScreen ? "column" : "row", position: "relative" }}>
                    <Box sx={{ width: "40%", height: isSmallScreen ? "auto" : "100%",margin:"0 5%", display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Typography variant="h5" sx={{color:"white", fontWeight:"bold"}}>{courseName}</Typography>
                    </Box>

                    <Box sx={{ width:"40%", height: isSmallScreen ? "auto" : "100%",margin:"0 5%", display: "flex", justifyContent: "end", alignItems: "center", marginTop: isSmallScreen ? "50px" : "0", position: isSmallScreen ? "absolute" : "relative", bottom: isSmallScreen ? "50px" : "unset" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: isSmallScreen ? "20px" : "0", }}>
                            <ToSignInUserButton2 text={signInUser ? getFirstInit(signInUser.firstName) : getFirstInit("Ezamazwe")} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* </div> */}
        </>
    );
}