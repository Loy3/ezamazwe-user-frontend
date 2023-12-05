import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'

const Label = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      {isSmallScreen ?
        <Typography variant="h5" component="h4" sx={{ color: 'primary.light', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px",padding:"0px", margin:"0" }}>
          {children}
        </Typography>
        :
        <Typography variant="h4" component="h4" sx={{ color: 'primary.light', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px", textAlign:"center" }}>
          {children}
        </Typography>
      }
    </>
  )
}

export default Label