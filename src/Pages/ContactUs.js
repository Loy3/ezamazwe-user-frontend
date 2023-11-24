import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavBar } from "../Components/NavBar";
import StopIcon from "@mui/icons-material/Stop";
import { HeaderComp } from "../Components/HeaderComp";
import SideCard from "../Components/SideCard";
import SectionHeading from "../Components/SectionHeading";

function ContactUs() {
  return (
    <>
      <NavBar
        icon={
          <StopIcon
            sx={{
              textDecoration: "none",
              color: "#396781",
              cursor: "pointer",
              width: "20px",
              height: "20px",
              alignItems: "center",
              justifyContent: "center",
              top: "990px",
              left: "742px",
            }}
          />
        }
      />
      <Box>
        <HeaderComp
          Header={"Contact Us"}
          Description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla."
          }
        />
        <SideCard header={"Company Name"} />
      </Box>
    </>
  );
}

export default ContactUs;
