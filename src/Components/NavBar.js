import { Box } from "@mui/material";
import logo from "../Assets/Images/logo2.png";
import { Image } from "@mui/icons-material";
export const NavBar = () => {
    return (
        <>
            <div style={{ width: "100%", height: "100vh", backgroundColor: "gray" }}>
                <Box sx={{ width: "100%", height: "150px", backgroundColor: "white" }}>
                    <Box sx={{ width: "100%", height: "50px", backgroundColor: "primary.light"}}>
                        
                    </Box>
                    <Box sx={{ width: "100%", height: "100px", display: "flex", flexDirection: "row" }}>
                        <Box sx={{ width: "20%", height: "100px", backgroundColor: "yellow" }}>
<img src={logo} style={{width}} />
                        </Box>
                        <Box sx={{ width: "60%", height: "100px", backgroundColor: "green" }}>

                        </Box>
                        <Box sx={{ width: "20%", height: "100px", backgroundColor: "red" }}>

                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    );
}