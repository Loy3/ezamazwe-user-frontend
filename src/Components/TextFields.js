import InputLabel from '@mui/material/InputLabel';
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function TextFields({ label, errorStatus, errorMessage, setState }) {

    return (
        <>
            <Box style={{ flex: "1", height: "auto" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: "18px", textAlign: "left" }}>{label}</InputLabel>
                <OutlinedInput placeholder="Enter" variant="outlined" sx={{ width: "100%", height: "50px", fontSize: "16px", borderRadius: "20px" }} onChange={(e) => setState(e.target.value)} />
                {errorStatus ?
                    <InputLabel sx={{ color: "warning.main", fontSize: "12px", marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                    : null}
            </Box>
        </>
    )
}


export const TextFieldPassword = ({ label, errorStatus, errorMessage, setState }) => {


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Box style={{ flex: "1", height: "auto", position: "relative" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: 18, textAlign: "left" }}>{label}</InputLabel>
                <OutlinedInput type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    placeholder={`${label}`} variant="outlined" sx={{ width: "100%", height: "50px", fontSize: "16px", borderRadius: "20px", borderColor: "primary.light" }} onChange={(e) => setState(e.target.value)} />
                {errorStatus ?
                    <InputLabel sx={{ color: "warning.main", fontSize: 12, marginTop: "10px", marginLeft: "5px" }}>{errorMessage}</InputLabel>
                    : null}

                {/* <Box sx={{ position: "absolute", right: "30px", bottom: "13px", width: "30px", height: "30px" }}>
                    {visabileType === "password" ?
                        <Button onClick={handleVisibility}>A</Button>
                        :
                        <Button onClick={handleVisibility}>B</Button>
                    }
                </Box> */}

            </Box>
        </>
    )
}