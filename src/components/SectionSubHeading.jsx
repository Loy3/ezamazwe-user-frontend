import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'

const SectionSubHeading = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      {isSmallScreen ?
        <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400" }}>
          {children}
        </Typography>
        :
        <Typography variant="h6" sx={{ color: 'primary.light', fontWeight: "400" }}>
          {children}
        </Typography>
      }
    </>
  )
}

export default SectionSubHeading