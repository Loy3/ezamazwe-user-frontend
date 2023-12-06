import { Box, Container, Typography, useMediaQuery } from "@mui/material"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export const CourseCard = ({ courseName, courseType, shortDescrip, video, cardFunction }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");


    return (
        <>
            <Box sx={{ width: "100%", height: isSmallScreen ? "400px" : "auto", display: "flex", flexDirection: isSmallScreen ? "column" : "row", margin: isSmallScreen? "10px 0 30px 0" : "10px 0" }}>
                <Box sx={{ width: isSmallScreen ? "100%" : "25%", height: isSmallScreen ? "80%" : "inherit", backgroundColor: "primary.light", position: "relative", cursor: "pointer" }} onClick={cardFunction}>
                    <video
                        muted
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                    <Box sx={{ width: "70px", height: "70px", backgroundColor: "white", borderRadius: "100%", position: "absolute", zIndex: "20", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <PlayArrowIcon sx={{ width: "40px", height: "40px", color: "primary.light", }} />
                    </Box>
                </Box>
                <Box sx={{ width: isSmallScreen ? "100%" : "70%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: isSmallScreen ? "10px" : "0" }}>
                    <Box sx={{
                        width: isSmallScreen ? "90%" : "95%", height: "90%", position: "relative"
                    }}>
                        
                        <Typography variant="h5" sx={{ color: "primary.light", fontWeight: "bold" }}>{courseName}</Typography>
                        <Box sx={{ position: isSmallScreen?"relative":"absolute", top: isSmallScreen?"unset":"0", right:  isSmallScreen?"unset": "10px" }}>
                            <Typography variant={isSmallScreen?"h6":"h5"} sx={{ color: "primary.light", fontWeight: "bold" }}>{courseType}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ width: isSmallScreen ? "100%" : "95%", marginTop: "20px" }} >
                            {shortDescrip}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "primary.light", marginTop: "20px" }}>by: Ezamazwe</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export const CourseContCard = ({ courseName, courseType, shortDescrip, image, cardFunction }) => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "450px",
                borderRadius: "20px",
                backgroundColor: "secondary.main",
            }}>
                <img src={image} alt="my photo" style={{ width: "100%", height: "55%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />

                <Box sx={{ width: "94%", height: "36%", margin: "0.5% 3%" }}>
                    <Typography variant="h5" sx={{ color: "primary.light", fontWeight: "bold", marginBottom: "10px" }}>{courseName}</Typography>
                    <Typography variant="body2" sx={{ marginBottom: "10px" }}>{shortDescrip}</Typography>
                    <Typography variant="body2" sx={{ color: "primary.light", marginBottom: "10px" }}>By: Company Name</Typography>
                    <Typography variant="h5" sx={{ color: "primary.light", fontWeight: "bold", marginBottom: "10px" }}>{courseType}</Typography>
                </Box>
            </Box >
        </>
    )
}

export const ContCard = ({ lessonNumber, text, duration }) => {
    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', color: 'primary.light', marginLeft:"5px" }}>
                    {`Lesson ${lessonNumber}`}
                </Typography>
                <Container sx={{ borderBottom: '1px solid #396781', borderTop: '1px solid #396781', paddingBottom: '0px', paddingTop: '0px' }}>
                    <Typography variant="body1" sx={{ margin: "5px 0 5px -5px" }}>{text}</Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.light', margin: "5px 0 5px -5px" }}  >
                        {`Duration: ${duration}`}
                    </Typography>

                </Container>
            </Box>
        </>
    )
}


export const UserCourseContCard = ({ courseName, courseType, shortDescrip, image, cardFunction }) => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "400px",
                borderRadius: "20px",
                backgroundColor: "secondary.main",
            }}>
                <img src={image} alt="my photo" style={{ width: "100%", height: "50%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />

                <Box sx={{ width: "94%", height: "36%", margin: "0.5% 3%" }}>
                    <Typography variant="h6" sx={{ color: "primary.light", fontWeight: "bold", marginBottom: "10px" }}>{courseName}</Typography>
                    <Typography variant="body2" sx={{ marginBottom: "10px" }}>{shortDescrip}</Typography>
                    <Typography variant="body2" sx={{ color: "primary.light", marginBottom: "10px" }}>By: Company Name</Typography>
                    <Typography variant="h6" sx={{ color: "primary.light", fontWeight: "bold", marginBottom: "10px" }}>{courseType}</Typography>
                </Box>
            </Box >
        </>
    )
}