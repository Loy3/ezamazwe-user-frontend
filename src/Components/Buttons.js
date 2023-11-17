import { Box, Button } from "@mui/material";
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

export default function button({ text, buttonFunction }) {
    return (
        <>
            <Button variant="contained" style={{ backgroundColor: "#1C3F53", width: "50%", borderRadius: 20 }} onClick={() => buttonFunction()}>{text}</Button>
        </>
    )
}

export const ImageButton = ({ handleImage, imageSrc }) => {
    return (
        <>
            <Box sx={{ position: "relative", width: "100px", height: "100px" }}>
                {imageSrc === null ?
                    <>
                        <Button component="label" variant="contained" startIcon={<PersonIcon sx={{ width: "70px", height: "70px", marginLeft: "15px" }} />} sx={{ width: "100%", height: "100%", borderRadius: "100%", backgroundColor: "primary.light" }}>
                            <VisuallyHiddenInput type="file" onChange={event => handleImage(event)} />
                        </Button>
                        <Box sx={{ width: "30px", height: "30px", backgroundColor: "primary.light", borderRadius: "100%", position: "absolute", right: "5px", bottom: "-5px" }} >
                            <AddCircleIcon sx={{ color: "#fff", width: "94%", height: "94%", marginLeft: "4%", marginTop: "4%" }} />
                        </Box>
                    </>
                    :
                    <>
                        
                     
                        <Button component="label" sx={{ width: "100%", height: "100%", borderRadius: "100%", backgroundColor: "primary.light" }}>
                        <VisuallyHiddenInput sx={{zIndex:"50"}} type="file" onChange={event => handleImage(event)} />
                        <img src={`${imageSrc}`} alt="imgS" id="image" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "100%", borderColor: "#fff", borderWidth: "2px" }} />
                        </Button>
                        <Box sx={{ width: "30px", height: "30px", backgroundColor: "primary.light", borderRadius: "100%", position: "absolute", right: "5px", bottom: "-5px" }} >
                            <AddCircleIcon sx={{ color: "#fff", width: "94%", height: "94%", marginLeft: "4%", marginTop: "4%" }} />
                        </Box>
                    </>
                }
            </Box>
        </>
    )
}