import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavBar } from "../Components/NavBar";
import StopIcon from "@mui/icons-material/Stop";
import { HeaderComp } from "../Components/HeaderComp";
import ContactUsCard from "../Components/ContactUsCard";
import {FooterComp} from "../Components/Footer"

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
      <Box sx={{ width: "100%" }}>
        <HeaderComp
          Header={"Contact Us"}
          Description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla."
          }
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <ContactUsCard
          header={"Send us a message"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          name={"First Name:"}
          secondname={"Last Name:"}
          email={"Email Address:"}
          subject={"Subject:"}
          label={"Label"}
          Desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac."
          }
        />
        <br></br>
        <FooterComp />
      </Box>
    </>
  );
}

export default ContactUs;
