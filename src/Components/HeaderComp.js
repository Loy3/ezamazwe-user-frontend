import { Box, Container, Typography } from "@mui/material"
import bgImage from "../Assets/Images/bg.jpg";
export const HeaderComp = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "60vh",
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative"
            }}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: "primary.light", opacity: "0.6" }} />
                <Box sx={{ position: "absolute", width: "90%", margin: "0 5%", height: "100%", top: "0", zIndex: "50", display: "flex", alignItems: "center" }}>
                    <Box sx={{}}>
                        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>Header</Typography>
                        <Typography variant="subtitle2" sx={{ color: "white", width:"80%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla.</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export const HeaderSmallComp = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "40vh",
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative"
            }}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: "primary.light", opacity: "0.6" }} />
                {/* <Box sx={{ position: "absolute", width: "90%", margin: "0 5%", height: "100%", top: "0", zIndex: "50", display: "flex", alignItems: "center" }}>
                    <Box sx={{}}>
                        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>Header</Typography>
                        <Typography variant="subtitle2" sx={{ color: "white", width:"80%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla.</Typography>
                    </Box>
                </Box> */}
            </Box>
        </>
    )
}