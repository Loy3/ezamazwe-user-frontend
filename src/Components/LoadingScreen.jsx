import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function LoadingScreen() {
  console.log('loading user info');
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: '100vh', width: "100vw", overflow: "hidden", justifyContent: "center", alignItems: "center" }} >
      <Box
        component="img"
        sx={{
          width: "30%",
        }}
        alt="Ezamazwe Logo"
        src={require('../Assets/Images/logo1.jpg')}
      />
      <CircularProgress thickness={3} color="primary" size={40} />
    </Box>
  )
}

export default LoadingScreen