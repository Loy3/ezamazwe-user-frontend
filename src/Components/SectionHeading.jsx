import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'

const SectionHeading = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      {isSmallScreen ?
        <Typography variant="h5" component="h5" sx={{ color: 'primary.main', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px",padding:"0px", margin:"0" }}>
          {children}
        </Typography>
        :
        <Typography variant="h4" component="h4" sx={{ color: 'primary.main', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px" }}>
          {children}
        </Typography>
      }
    </>
  )
}

export default SectionHeading