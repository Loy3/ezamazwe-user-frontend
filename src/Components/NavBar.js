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
import NavLink from "./NavLink";

export const NavBar = ({ location }) => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    
    const isMedToLaScreen = useMediaQuery("(max-width:1024px) and (min-width:800px)");
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

    const [homeColor, setHomeColor] = useState("#396781");
    const [aboutColor, setAboutColor] = useState("black");
    const [coursesColor, setCoursesColor] = useState("black");
    const [contactColor, setContactColor] = useState("black");
    const [homeWeight, setHomeWeight] = useState("bold");
    const [aboutWeight, setAboutWeight] = useState("normal");
    const [coursesWeight, setCoursesWeight] = useState("normal");
    const [contactWeight, setContactWeight] = useState("normal");

    useEffect(() => {
        switch (location) {
            case "home":
                // console.log("Home");
                setHomeColor("#396781");
                setAboutColor("black");
                setCoursesColor("black");
                setContactColor("black");

                setHomeWeight("bold");
                setAboutWeight("normal");
                setCoursesWeight("normal");
                setContactWeight("normal");
                break;
            case "about":
                setHomeColor("black");
                setAboutColor("#396781");
                setCoursesColor("black");
                setContactColor("black");

                setHomeWeight("normal");
                setAboutWeight("bold");
                setCoursesWeight("normal");
                setContactWeight("normal");
                break;
            case "courses":
                setHomeColor("black");
                setAboutColor("black");
                setCoursesColor("#396781");
                setContactColor("black");

                setHomeWeight("normal");
                setAboutWeight("normal");
                setCoursesWeight("bold");
                setContactWeight("normal");
                break;
            case "contact":
                setHomeColor("black");
                setAboutColor("black");
                setCoursesColor("black");
                setContactColor("#396781");

                setHomeWeight("normal");
                setAboutWeight("normal");
                setCoursesWeight("normal");
                setContactWeight("bold");
                break;
            default:
                setHomeColor("black");
                setAboutColor("black");
                setCoursesColor("black");
                setContactColor("black");

                setHomeWeight("normal");
                setAboutWeight("normal");
                setCoursesWeight("normal");
                setContactWeight("normal");
        }
    }, [location])

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
                navigate("/about");
                // console.log("About");
                break;
            case "courses":
                navigate("/courses");
                break;
            case "tutors":
                // navigate("");
                console.log("Tutors");
                alert("Route not available yet.")
                break;
            case "contact":
                navigate("/contact");
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

    const handleEmailClick = (email) => {
        const composeUrl = `https://mail.google.com/mail/u/${email}/#compose`;
        // window.location.href = composeUrl;
        window.open(composeUrl, '_blank');
    };

    return (
        <>
            {/* <div style={{ width: "100%", height: "100vh", backgroundColor: "gray" }}> */}
            {isSmallScreen && !navStatus ?
                <Box sx={{ position: "absolute", zIndex: "60" }}>
                    <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer" }} onClick={() => handleNav("open")}> <MenuIcon sx={{ color: "#fff", width: "40px", height: "40px", marginLeft: "4%", marginTop: "4%" }} /></Button>
                </Box>
                :
                <Box sx={{ width: "100%", maxWidth: isSmallScreen ? "420px" : "100%",  height: isSmallScreen ? "100%" : "120px", backgroundColor: "white", position: isSmallScreen ? "fixed" : "relative", zIndex: isSmallScreen ? "80" : "0" }}>
                    {isSmallScreen ?
                        <Button sx={{ textDecoration: "none", padding: "0 5px", color: "black", cursor: "pointer", position: "absolute", right: "5px", top: "20px", zIndex: "50" }} onClick={() => handleNav("close")}> <CancelIcon sx={{ color: "primary.light", width: "30px", height: "30px" }} /></Button>
                        : null}
                    {isSmallScreen ? null :
                        <Box sx={{ width: "100%", height: isSmallScreen ? "7vh" : "35px", backgroundColor: "primary.light", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: isSmallScreen ? "start" : "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", width: isSmallScreen ? "95%" : "90%", justifyContent: isSmallScreen ? "start" : "end", alignItems: isSmallScreen ? "start" : "center", marginLeft: isSmallScreen ? "20px" : "0", marginTop: isSmallScreen ? "10px" : "0" }}>
                                <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", }}>
                                    <Typography sx={{ color: "white", marginRight: "5px", fontSize: "14px" }} onClick={() => handleEmailClick("emailAddress@ezamazwe.com")}>emailAddress@ezamazwe.com</Typography>
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
                    <Box sx={{ width: "100%", height: isSmallScreen ? "100%" : "90px", display: "flex", flexDirection: isSmallScreen ? "column" : "row", position: "relative", justifyContent: 'space-between' }}>
                        {isMedToLaScreen ?
                            <Box sx={{ width: "18%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: "center" }}>
                                <img src={logo} style={{ width: "150px", marginLeft: isSmallScreen ? "20px" : "0", cursor: "pointer" }} onClick={() => handleNavigation('home')} />
                            </Box>
                            :
                            <Box sx={{ width: isSmallScreen ? "100%" : "20%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: "center" }}>
                                <img src={logo} style={{ width: "150px", marginLeft: isSmallScreen ? "20px" : "0", cursor: "pointer" }} onClick={() => handleNavigation('home')} />
                            </Box>
                        }
                        <Box sx={{ width: isSmallScreen ? "100%" : "auto", height: "100%", display: "flex", justifyContent: isSmallScreen ? "start" : "center", alignItems: isSmallScreen ? "flex-start" : "center", marginTop: isSmallScreen ? "50px" : "0" }}>
                            <Box sx={{ display: "flex", height: 'auto', flexDirection: isSmallScreen ? "column" : "row", width: isSmallScreen ? "100%" : 'fit-content' }}>
                                <NavLink color={homeColor} path={'home'} text={'Home'} isSmallScreen={isSmallScreen} handleNavigation={handleNavigation} fontWeight={homeWeight} />
                                <NavLink color={aboutColor} path={'about'} text={'About Us'} isSmallScreen={isSmallScreen} handleNavigation={handleNavigation} fontWeight={aboutWeight} />
                                <NavLink color={coursesColor} path={'courses'} text={'Courses'} isSmallScreen={isSmallScreen} handleNavigation={handleNavigation} fontWeight={coursesWeight} />
                                <NavLink color={'black'} path={'tutors'} text={'Tutors'} isSmallScreen={isSmallScreen} handleNavigation={handleNavigation} fontWeight="normal" />
                                <NavLink color={contactColor} path={'contact'} text={'Contact Us'} isSmallScreen={isSmallScreen} handleNavigation={handleNavigation} fontWeight={contactWeight} />
                            </Box>
                        </Box>

                        <Box sx={{ width: isSmallScreen ? "100%" : "9%", minWidth: isSmallScreen && '60px', height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: isSmallScreen ? "50px" : "0", position: isSmallScreen ? "absolute" : "relative", bottom: isSmallScreen ? "50px" : "unset", padding: !isSmallScreen ? "0 20px" : "0" }}>
                            {!isSignedIn ?
                                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: isSmallScreen ? "20px" : "0" }}>
                                    {/* <SmallButton text={"Sign In"} buttonFunction={signIn} /> */}
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



export const CourseNavBar = ({ courseName }) => {
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

            <Box sx={{ width: "100%", height: "90px", backgroundColor: "primary.light", position: "relative", zIndex: isSmallScreen ? "80" : "0" }}>
                <Box sx={{ width: "100%", height: isSmallScreen ? "100%" : "90px", display: "flex", flexDirection: "row", position: "relative" }}>
                    <Box sx={{ width: "40%", height: "100%", margin: "0 5%", display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>{courseName}</Typography>
                    </Box>

                    <Box sx={{ width: "40%", height: "100%", margin: "0 5%", display: "flex", justifyContent: "end", alignItems: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", }}>
                            <ToSignInUserButton2 text={signInUser ? getFirstInit(signInUser.firstName) : getFirstInit("Ezamazwe")} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* </div> */}
        </>
    );
}