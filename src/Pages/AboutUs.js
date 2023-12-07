import { Box, Grid, useMediaQuery } from "@mui/material";
import { FooterComp } from "../Components/Footer";
import { HeaderComp, HeaderSmallComp } from "../Components/HeaderComp";
import { NavBar } from "../Components/NavBar";
import React, { useEffect, useState } from "react";
import image from "../Assets/Images/about.jpg";
import Label from "../Components/Label";
import Button, { HomeButtons } from "../Components/Buttons";
import SectionSubHeading from "../Components/SectionSubHeading";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LearningSupport from "../Assets/Images/learning-support (1).png";
import image3 from "../Assets/Images/max-fisch.jpg";
import image4 from "../Assets/Images/pexels-pavel-danilyuk-8423893.jpg";
import facebook from "../Assets/Icons/facebook.png";
import instagram from "../Assets/Icons/instagram.png";
import twitter from "../Assets/Icons/twitter.png";
import headerImage from "../Assets/Images/2.jpg";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@emotion/react";
import { ViewMembersFunction } from "../Services/AuthService";
import { auth } from "../Services/firebaseConfig";


const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla."

export default function AboutUs() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    const isMedToLaScreen = useMediaQuery("(max-width:1024px) and (min-width:800px)");
    const navigate = useNavigate();


    const [join, setJoin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [members, setMembers] = useState([]);
    const [open, setOpen] = useState(false);
    const theme = useTheme();


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

    // useEffect(() => {
    //     handleFetchMembers();
    // }, []);

    // const handleJoin = async () => {
    //     try {
    //         const user = await SignupFunction(email, password);
    //         console.log('User data in signup component:', user);
    //         const user_email = user.email;
    //         const user_id = user.uid;
    //         console.log('User id in signup component:', user_id);
    //         console.log('User email in signup component:', user_email);

    //         alert('User signed up');
    //         handleClose();
    //         navigate('/verification', { state: { userId: user_id, userEmail: user_email } });

    //     } catch (error) {
    //         console.error('Error occurred during signup:', error.message);
    //     }
    // }

    // const handleFetchMembers = async () => {
    //     try {
    //         const data = await ViewMembersFunction();
    //         setMembers(data);

    //     } catch (error) {
    //         console.log("Error occurred while fetching data:", error);
    //     }
    // }


    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <>
            <NavBar location={"about"} />
            <HeaderComp text={"About Us"} paragraph={paragraph} />
            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                 
                }}>
                    <Grid  sx={{ display: "flex", margin: "50px 0", flexDirection: "row", width: "100%", padding:'10px' }}>
                        <Grid item xs={12} sm={3} sx={{ width: isSmallScreen ? "100%" : "35%", height: isSmallScreen ? "auto" : "inherit", display: isMediumScreen ? "none" : "flex", justifyContent: "center", alignItems: "center", position: "relative",marginLeft:'20px',paddingLeft: isSmallScreen ?'0px' : '30px'}} >
                            <Box sx={{ width: "50%", marginRight:'260px'}}>
                            <Box sx={{ width: "110%", height: "auto", position: "relative",}}>
                                <Box sx={{ height: isSmallScreen ? "350px" : "450px", width: isSmallScreen ? "300px" : "400px", opacity: "0.5", backgroundColor: "primary.light", borderRadius: "20px", zIndex: "10", marginLeft: isSmallScreen ? "30px" : "0", marginTop: "0px" }} />
                                <img src={headerImage} alt="headerImage" style={{ height: isSmallScreen ? "320px" : "420px", width: isSmallScreen ? "300px" : "400px", objectFit: "cover", zIndex: "20", position: "absolute", top: "0", left: isSmallScreen ? "0" : "30px", borderRadius: "20px" }} />
                            </Box>
                            </Box>
                        </Grid>

                        <Grid  sx={{ width: isMediumScreen ? "100%" : "65%", height: isMediumScreen ? "auto" : "480px", display: "flex", justifyContent: "center", alignItems: "center", }} >
                            <Box   sx={{ width: isMediumScreen ? "90%" : "80%", height: "auto" }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Label children={"We are Company Name"} />
                                </Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <SectionSubHeading
                                        children={
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        }
                                        sx={{ marginBottom: "30px" }}
                                    />
                                </Box>
                                <Box  xs={12} sx={{ width: isSmallScreen ? "94%" : "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: isSmallScreen ? "0 3%" : "0" }}>
                                    <Typography variant="body1" paragraph sx={{ marginTop: "10px", textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisqueconvallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac. Ut nec accumsan turpis. Ut eget leo arcu. Suspendisse potenti. Nunc a pellentesque nisl.
                                    </Typography>
                                </Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
                                    <Box sx={{ width: isSmallScreen ? "70%" : "35%" }}>
                                        <HomeButtons text={"Join"} buttonFunction={toSignUp} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
            <Box
                sx={{ backgroundColor: "#C6D0D6", width: "100%", paddingTop: "50px", margin: "50px 0" }}
            >
                <Box sx={{
                    width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center",
                }}>
                    <Box sx={{
                        maxWidth: "1440px", width: "100%", height: "100%",
                        
                    }}>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Label children={"What We do?"} />
                            <Box sx={{ width: isSmallScreen ? "90%" : "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <SectionSubHeading
                                    children={
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }
                                    sx={{ marginBottom: "30px" }}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                // gap: "270px",
                                margin: "40px 0",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                // backgroundColor:"yellow"
                                flexDirection: isSmallScreen ? "column" : "row"
                            }}
                        >
                            <Box
                                sx={{
                                    width: isSmallScreen ? "90%" : "30%", margin: isSmallScreen ? "10px 5%" : "10px",
                                    height: "300px",
                                    backgroundColor: "#396781",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "20px",
                                }}
                            >
                                <Box sx={{ width: "94%", margin: "5%" }}>
                                    <Box
                                        sx={{
                                            borderRadius: "50%",
                                            color: "white",
                                            border: "3px solid white",
                                            margin: "auto",
                                            marginBottom: "10px",
                                            width: '80px',
                                            height: '80px',
                                        }}
                                    >
                                        <img src={LearningSupport} alt="vector" style={{ width: "60px", height: "60px", margin: "10px" }} />
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        Service Title
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "white",
                                            textAlign: "center",
                                            width: "90%",
                                            margin: "20px 5%"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        egestas metus nulla.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: isSmallScreen ? "90%" : "30%", margin: isSmallScreen ? "10px 5%" : "10px",
                                    height: "300px",
                                    backgroundColor: "#396781",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "20px",
                                }}
                            >
                                <Box sx={{ width: "94%", margin: "5%" }}>
                                    <Box
                                        sx={{
                                            borderRadius: "50%",
                                            color: "white",
                                            border: "3px solid white",
                                            margin: "auto",
                                            marginBottom: "10px",
                                            width: '80px',
                                            height: '80px',
                                        }}
                                    >
                                        <img src={LearningSupport} alt="vector" style={{ width: "60px", height: "60px", margin: "10px" }} />
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        Service Title
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "white",
                                            textAlign: "center",
                                            width: "90%",
                                            margin: "20px 5%"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        egestas metus nulla.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    width: isSmallScreen ? "90%" : "30%", margin: isSmallScreen ? "10px 5%" : "10px",
                                    height: "300px",
                                    backgroundColor: "#396781",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "20px",
                                }}
                            >
                                <Box sx={{ width: "94%", margin: "5%" }}>
                                    <Box
                                        sx={{
                                            borderRadius: "50%",
                                            color: "white",
                                            border: "3px solid white",
                                            margin: "auto",
                                            marginBottom: "10px",
                                            width: '80px',
                                            height: '80px',
                                        }}
                                    >
                                        <img src={LearningSupport} alt="vector" style={{ width: "60px", height: "60px", margin: "10px" }} />
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        Service Title
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "white",
                                            textAlign: "center",
                                            width: "90%",
                                            margin: "20px 5%"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        egestas metus nulla.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", margin: "50px 0"
            }}>
                <Box sx={{
                    maxWidth: "1440px", width: "100%", height: "100%",
                    // backgroundColor: "black",
                }}>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "40px",
                        }}
                    >
                        <Label children={"  Our Team"} />
                        <Box sx={{ width: isSmallScreen ? "90%" : "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SectionSubHeading
                                children={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                }
                                sx={{ marginBottom: "30px" }}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            width: "90%",
                            margin: "0 5%",
                            // height: "300px",
                            // justifyContent: "space-between",
                            // gap: "50px",
                            marginTop: "50px",
                            flexDirection: isSmallScreen ? "column" : "row"
                        }}
                    >
                        <Box
                            sx={{ display: "flex", flexDirection: isMediumScreen ? "column" : "row", width: isSmallScreen ? "100%" : "49%", margin: isSmallScreen ? "10px 1%" : "0 1%", height: isMediumScreen ? "auto" : "300px", backgroundColor: "#E3ECF1", borderRadius: "30px", }}
                        >
                            <Box sx={{ height: "100%", width: isMediumScreen ? "100%" : "45%", display: "flex", justifyContent: isMediumScreen ? "center" : "unset" }}>
                                <img
                                    src={image4}
                                    alt="vector"

                                    style={{
                                        objectFit: "cover",
                                        borderRadius: isMediumScreen ? "100%" : "30px  0 0 30px",
                                        width: isMediumScreen ? "150px" : "100%",
                                        height: isMediumScreen ? "150px" : "100%",
                                        margin: isMediumScreen ? "20px 0" : "0",
                                        border: isMediumScreen ? "3px solid #396781" : "none",
                                        padding: isMediumScreen ? "5px" : "0"
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: isMediumScreen ? "100%" : "55%",
                                    margin: isMediumScreen ? "0 0 10px 0" : "0"
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        marginTop: isMediumScreen ? "10px" : "33px",
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                        lineHeight: "32.02px",
                                        alignItems: "center",
                                        color: "#396781",
                                        width: "100%",
                                    }}
                                >
                                    Team member
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#747171",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "32px",
                                        letterSpacing: "0.15",
                                        textAlign: "center",
                                        width: "100%",
                                    }}
                                >
                                    Lorem ipsum dolor
                                </Typography>

                                <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: "#1C3F53",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letterSpacing: "0.15",
                                            textAlign: "center",
                                            width: "80%",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",

                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        marginTop: "40px",
                                    }}
                                >
                                    <Box>
                                        <img
                                            src={facebook}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={instagram}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={twitter}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{ display: "flex", flexDirection: isMediumScreen ? "column" : "row", width: isSmallScreen ? "100%" : "49%", margin: isSmallScreen ? "10px 1%" : "0 1%", height: isMediumScreen ? "auto" : "300px", backgroundColor: "#E3ECF1", borderRadius: "30px", }}
                        >
                            <Box sx={{ height: "100%", width: isMediumScreen ? "100%" : "45%", display: "flex", justifyContent: isMediumScreen ? "center" : "unset" }}>
                                <img
                                    src={image3}
                                    alt="vector"

                                    style={{
                                        objectFit: "cover",
                                        borderRadius: isMediumScreen ? "100%" : "30px  0 0 30px",
                                        width: isMediumScreen ? "150px" : "100%",
                                        height: isMediumScreen ? "150px" : "100%",
                                        margin: isMediumScreen ? "20px 0" : "0",
                                        border: isMediumScreen ? "3px solid #396781" : "none",
                                        padding: isMediumScreen ? "5px" : "0"
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: isMediumScreen ? "100%" : "55%",
                                    margin: isMediumScreen ? "0 0 10px 0" : "0"
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        marginTop: isMediumScreen ? "10px" : "33px",
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                        lineHeight: "32.02px",
                                        alignItems: "center",
                                        color: "#396781",
                                        width: "100%",
                                    }}
                                >
                                    Team member
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#747171",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "32px",
                                        letterSpacing: "0.15",
                                        textAlign: "center",
                                        width: "100%",
                                    }}
                                >
                                    Lorem ipsum dolor
                                </Typography>

                                <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: "#1C3F53",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letterSpacing: "0.15",
                                            textAlign: "center",
                                            width: "80%",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",

                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        marginTop: "40px",
                                    }}
                                >
                                    <Box>
                                        <img
                                            src={facebook}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={instagram}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={twitter}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: "90%",
                            margin: "0 5%",
                            // height: "300px",
                            // justifyContent: "space-between",
                            // gap: "50px",
                            marginTop: "50px",
                            flexDirection: isSmallScreen ? "column" : "row"
                        }}
                    >
                        <Box
                            sx={{ display: "flex", flexDirection: isMediumScreen ? "column" : "row", width: isSmallScreen ? "100%" : "49%", margin: isSmallScreen ? "10px 1%" : "0 1%", height: isMediumScreen ? "auto" : "300px", backgroundColor: "#E3ECF1", borderRadius: "30px", }}
                        >
                            <Box sx={{ height: "100%", width: isMediumScreen ? "100%" : "45%", display: "flex", justifyContent: isMediumScreen ? "center" : "unset" }}>
                                <img
                                    src={image3}
                                    alt="vector"

                                    style={{
                                        objectFit: "cover",
                                        borderRadius: isMediumScreen ? "100%" : "30px  0 0 30px",
                                        width: isMediumScreen ? "150px" : "100%",
                                        height: isMediumScreen ? "150px" : "100%",
                                        margin: isMediumScreen ? "20px 0" : "0",
                                        border: isMediumScreen ? "3px solid #396781" : "none",
                                        padding: isMediumScreen ? "5px" : "0"
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: isMediumScreen ? "100%" : "55%",
                                    margin: isMediumScreen ? "0 0 10px 0" : "0"
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        marginTop: isMediumScreen ? "10px" : "33px",
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                        lineHeight: "32.02px",
                                        alignItems: "center",
                                        color: "#396781",
                                        width: "100%",
                                    }}
                                >
                                    Team member
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#747171",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "32px",
                                        letterSpacing: "0.15",
                                        textAlign: "center",
                                        width: "100%",
                                    }}
                                >
                                    Lorem ipsum dolor
                                </Typography>

                                <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: "#1C3F53",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letterSpacing: "0.15",
                                            textAlign: "center",
                                            width: "80%",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",

                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        marginTop: "40px",
                                    }}
                                >
                                    <Box>
                                        <img
                                            src={facebook}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={instagram}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={twitter}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{ display: "flex", flexDirection: isMediumScreen ? "column" : "row", width: isSmallScreen ? "100%" : "49%", margin: isSmallScreen ? "10px 1%" : "0 1%", height: isMediumScreen ? "auto" : "300px", backgroundColor: "#E3ECF1", borderRadius: "30px", }}
                        >
                            <Box sx={{ height: "100%", width: isMediumScreen ? "100%" : "45%", display: "flex", justifyContent: isMediumScreen ? "center" : "unset" }}>
                                <img
                                    src={image4}
                                    alt="vector"

                                    style={{
                                        objectFit: "cover",
                                        borderRadius: isMediumScreen ? "100%" : "30px  0 0 30px",
                                        width: isMediumScreen ? "150px" : "100%",
                                        height: isMediumScreen ? "150px" : "100%",
                                        margin: isMediumScreen ? "20px 0" : "0",
                                        border: isMediumScreen ? "3px solid #396781" : "none",
                                        padding: isMediumScreen ? "5px" : "0"
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: isMediumScreen ? "100%" : "55%",
                                    margin: isMediumScreen ? "0 0 10px 0" : "0"
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        marginTop: isMediumScreen ? "10px" : "33px",
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                        lineHeight: "32.02px",
                                        alignItems: "center",
                                        color: "#396781",
                                        width: "100%",
                                    }}
                                >
                                    Team member
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#747171",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "32px",
                                        letterSpacing: "0.15",
                                        textAlign: "center",
                                        width: "100%",
                                    }}
                                >
                                    Lorem ipsum dolor
                                </Typography>

                                <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: "#1C3F53",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letterSpacing: "0.15",
                                            textAlign: "center",
                                            width: "80%",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",

                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        marginTop: "40px",
                                    }}
                                >
                                    <Box>
                                        <img
                                            src={facebook}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={instagram}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                        <img
                                            src={twitter}
                                            alt="vector"
                                            width={"35px"}
                                            height={"35px"}
                                            style={{ margin: "0 10px" }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <FooterComp />
        </>
    )
}