import InputLabel from '@mui/material/InputLabel';
import { Box, IconButton, InputAdornment, Link, OutlinedInput, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { makeStyles } from '@material-ui/core/styles';

export default function TextFields({ label, errorStatus, errorMessage, setState, disabled, placeholder }) {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    return (
        <>
            <Box style={{ flex: "1", height: "auto" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: isSmallScreen ? "16px" : "18px", textAlign: "left" }}>{label}</InputLabel>
                <OutlinedInput placeholder={disabled ? ` ${placeholder}` : `Enter ${label}`} variant="outlined" sx={{
                    width: "100%",
                    height: isSmallScreen ? "45px" : "50px",
                    fontSize: isSmallScreen ? "14px" : "16px",
                    borderRadius: "12px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                        borderWidth: 2
                    },
                    "&:hover > .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main"
                    }
                }} onChange={(e) => setState(e.target.value)} disabled={disabled} />
                {errorStatus ?
                    <>
                        <Typography sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }} variant="subtitle2" component="h2">
                            {errorMessage}
                        </Typography>
                    </>
                    : null}
            </Box>
        </>
    )
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//                 borderColor: "red", // Replace "red" with the desired border color
//             },
//             "&:hover fieldset": {
//                 borderColor: "green", // Replace "green" with the desired hover border color
//             },
//             "&.Mui-focused fieldset": {
//                 borderColor: "blue", // Replace "blue" with the desired focused border color
//             },
//         },
//     },
// }));

export const TextFieldPassword = ({ label, errorStatus, errorMessage, setState, isSignin }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    // };

    return (
        <>
            <Box style={{ flex: "1", height: "auto", position: "relative" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: isSmallScreen ? "16px" : "18px", textAlign: "left" }}>{label}</InputLabel>
                <OutlinedInput type={showPassword ? 'text' : 'password'}
                    // {/*className={classes.root}*/}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    placeholder={`Enter ${label}`} variant="outlined" sx={{
                        width: "100%",
                        height: isSmallScreen ? "45px" : "50px",
                        fontSize: isSmallScreen ? "14px" : "16px",
                        borderRadius: "12px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.light",
                            borderWidth: 2
                        },
                        "&:hover > .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main"
                        }
                    }} onChange={(e) => setState(e.target.value)} />
                {errorStatus ?
                    <Typography sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }} variant="subtitle2" component="h2">
                        {errorMessage}
                    </Typography>
                    // <InputLabel sx={{ color: "warning.main", fontSize: 11, marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                    : null}
                {isSignin ?
                    <Box sx={{ width: "97%", textAlign: "right", marginTop: "5px" }}>
                        <Link href="forgot" style={{ width: "100%", textAlign: "right", cursor: "pointer", fontSize: isSmallScreen ? "14px" : "16px", fontWeight: "400", }}>
                            Forgot Your password?
                        </Link>
                    </Box>
                    : null}
            </Box>
        </>
    )
}

export const UserTextFields = ({ label, errorStatus, errorMessage, setState, disabled, placeholder }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    return (
        <>
            <Box style={{ flex: "1", height: "auto" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: isSmallScreen ? "16px" : "18px", textAlign: "left" }}>{label}</InputLabel>
                <OutlinedInput placeholder={ placeholder} variant="outlined" sx={{
                    width: "100%",
                    height: isSmallScreen ? "45px" : "50px",
                    fontSize: isSmallScreen ? "14px" : "16px",
                    borderRadius: "12px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                        borderWidth: 2
                    },
                    "&:hover > .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main"
                    }
                }} onChange={(e) => setState(e.target.value)} disabled={disabled} />

            </Box>
        </>
    )
}