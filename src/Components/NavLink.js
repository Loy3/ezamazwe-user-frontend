import { Link } from '@mui/material'
import React from 'react'

export default function NavLink({ color, path, text, isSmallScreen, handleNavigation, fontWeight }) {
    return (
        <Link
            sx={{
                '&:hover': color !== "#396781" &&  {
                    backgroundColor: "#396781",
                    color: "#FFF",
                    fontWeight: "bold",
                    borderRadius: !isSmallScreen && "10px"
                },
                width: isSmallScreen ? "calc(100% - 40px)" : '80px',
                display: "flex",
                textAlign: isSmallScreen ? "right" : "left",
                textDecoration: "none",
                // height: "50%",
                padding: "10px 20px",
                color: color,
                cursor: color !== "#396781" &&  "pointer",
                marginLeft: "0",
                marginTop: "0",
                fontWeight: fontWeight,
                justifyContent: isSmallScreen ? "left" : 'center',
                alignItems: 'center',
                backgroundColor: color === "#396781" &&  isSmallScreen && "secondary.light"
            }}
            onClick={() => handleNavigation(path)}
        >{text}</Link>
    )
}
