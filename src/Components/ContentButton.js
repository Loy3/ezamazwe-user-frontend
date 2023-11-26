import { Box, Button, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Contentbutton({ text, buttonFunction }) {
    return (
        <>
            <Button variant="contained" style={{ backgroundColor: "#396781", width: "94%",margin:"0 3%", borderRadius: 20 }} onClick={() => buttonFunction()}>{text}</Button>
        </>
    )
}

// export const ImageButton = ({ handleImage, imageSrc }) => {
//     const isSmallScreen = useMediaQuery("(max-width:600px)");
//     return (
//         <>
//             <Box sx={{ position: "relative", width: isSmallScreen ? "85px" : "100px", height: isSmallScreen ? "85px" : "100px" }}>
//                 {imageSrc === null ?
//                     <>
//                         <Button component="label" variant="contained" startIcon={<PersonIcon sx={{ width: isSmallScreen ? "55px" : "70px", height: isSmallScreen ? "55px" : "70px", marginLeft: "15px" }} />} sx={{ width: "100%", height: "100%", borderRadius: "100%", backgroundColor: "primary.light" }}>
//                             <VisuallyHiddenInput type="file" onChange={event => handleImage(event)} />
//                         </Button>
//                         <Box sx={{ width: "30px", height: "30px", backgroundColor: "primary.light", borderRadius: "100%", position: "absolute", right: "5px", bottom: "-5px" }} >
//                             <AddCircleIcon sx={{ color: "#fff", width: "94%", height: "94%", marginLeft: "4%", marginTop: "4%" }} />
//                         </Box>
//                     </>
//                     :
//                     <>


//                         <Button component="label" sx={{ width: "100%", height: "100%", borderRadius: "100%", backgroundColor: "primary.light" }}>
//                             <VisuallyHiddenInput sx={{ zIndex: "50", width:"100%", height:"100%" }} type="file" onChange={event => handleImage(event)} />
//                             <img src={`${imageSrc}`} alt="imgS" id="image" style={{ width: isSmallScreen ? "85px" : "100px", height: isSmallScreen ? "85px" : "100px", objectFit: "cover", borderRadius: "100%", borderColor: "#fff", borderWidth: "2px", position:"absolute" }} />
//                         </Button>
//                         <Box sx={{ width: "30px", height: "30px", backgroundColor: "primary.light", borderRadius: "100%", position: "absolute", right: "5px", bottom: "-5px" }} >
//                             <AddCircleIcon sx={{ color: "#fff", width: "94%", height: "94%", marginLeft: "4%", marginTop: "4%" }} />
//                         </Box>
//                     </>
//                 }
//             </Box>
//         </>
//     )
// }