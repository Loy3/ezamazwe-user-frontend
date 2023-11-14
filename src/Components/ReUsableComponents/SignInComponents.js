import { Button } from "@mui/material";

export default function button(props) {
    return (
        <>
            <Button variant="contained" style={{backgroundColor:"#1C3F53", width: "40%", borderRadius: 20}}>{props.text}</Button>
        </>
    )
}

/*
<div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Button text="Sign In" />
    </div>
    */