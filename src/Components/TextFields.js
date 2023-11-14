import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export default function TextFields({ label, errorStatus, errorMessage,setState }) {

    return (
        <>
            <div style={{ width: 400, height: "auto" }}>
                <InputLabel sx={{ marginBottom: "10px", color: "primary.light", fontSize: 18 }}>{label}</InputLabel>
                <TextField placeholder="Enter" variant="outlined" sx={{ width: "100%", height: 50, fontSize: 16, borderRadius: 20 }} onChange={(e)=>setState(e.target.value)}/>
                {errorStatus ?
                    <InputLabel sx={{ color: "warning.main", fontSize: 12, marginTop: "10px", marginLeft:"5px" }}>{errorMessage}</InputLabel>
                    : null}
            </div>
        </>
    )
}