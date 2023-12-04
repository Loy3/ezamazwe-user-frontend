import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import logo from "../Assets/Images/logo2.png";

export const FooterComp = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    return (
        <>
            <Box sx={{ width: "100%", height: "auto", padding: "50px 0", backgroundColor: "secondary.main", }}>
                <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", width: "100%" }}>
                    <Box sx={{ width: isSmallScreen ? "100%" : "40%" }}>
                        <Box sx={{ width: "90%", margin: "0 5%" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.light" }}>For more Info:</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "30px" }}>
                                <Typography variant="subtitle1" sx={{ color: "primary.light", marginRight: "5px" }}>Call:</Typography>
                                <Typography variant="subtitle1"> +27 84 762 4761 / +27 81 371 3520</Typography>
                            </Box>

                            <Typography variant="subtitle1" sx={{ color: "primary.light", marginTop: "20px" }}>Visit:</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "5px" }}>
                                <Typography variant="subtitle1" sx={{ color: "primary.light", marginRight: "5px" }}>Head Office:</Typography>
                                <Typography variant="subtitle1">107 Villa Dine,</Typography>

                            </Box>
                            <Box>
                                <Typography variant="subtitle1"> 550 Denmar pl, Garsfontein</Typography>
                                <Typography variant="subtitle1">Pretoria East, 0042</Typography>
                            </Box>

                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "5px" }}>
                                <Typography variant="subtitle1" sx={{ color: "primary.light", marginRight: "5px" }}>Main Campus:</Typography>
                                <Typography variant="subtitle1">1482 Police Station street,</Typography>

                            </Box>
                            <Box>
                                <Typography variant="subtitle1">Lenyenye-A, 0857</Typography>
                            </Box>

                            <Box sx={{ display: "flex", flexDirection: "row", marginTop: "5px" }}>
                                <Typography variant="subtitle1" sx={{ color: "primary.light", marginRight: "5px" }}>Corporate Park:</Typography>
                                <Typography variant="subtitle1"> 1482 Police Station Street</Typography>

                            </Box>
                            <Box>
                                <Typography variant="subtitle1">Lenyenye-A, 0857</Typography>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={{ width: isSmallScreen ? "100%" : "40%", marginTop: "50px" }}>
                        <Box sx={{ width: "90%", margin: "0 5%" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.light" }}>Home</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.light" }}>About Us</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.light" }}>Courses</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.light" }}>Tutors</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.light" }}>Contact Us</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: isSmallScreen ? "100%" : "20%" }}>
                        <Box sx={{ width: "90%", margin: isSmallScreen ? "5% 3%" : "0 5%" }}>
                            <img src={logo} style={{ width: "150px", }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", height: "60px", backgroundColor: "primary.light", marginTop: "50px" }} />
            </Box>
        </>
    )
}
