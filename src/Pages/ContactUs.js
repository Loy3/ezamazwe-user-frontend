import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavBar } from "../Components/NavBar";
import StopIcon from "@mui/icons-material/Stop";
import { HeaderComp } from "../Components/HeaderComp";
import ContactUsCard from "../Components/ContactUsCard";
import { FooterComp } from "../Components/Footer"
import SideCard from "../Components/SideCard";
function ContactUs() {
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis magna a tellus blandit, eu bibendum enim venenatis. Nulla massa turpis, elementum id maximus nec, pellentesque vel ante. Vestibulum dapibus enim neque, id vestibulum quam facilisis ac.";
  const isSmallScreen = useMediaQuery("(max-width:600px)");
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
          text={"Contact Us"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas metus nulla."
          }
        />
      </Box>
      <Box sx={{
        width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <Box sx={{
          maxWidth: "1440px", width: "100%", height: "100%",
        }}>

          <Box sx={{ width: "94%", margin: "-100px 3% 30px 3%", display: "flex", flexDirection: isSmallScreen ? "column" : "row", }}>
            <Box sx={{ width: isSmallScreen ? "94%" : "30%", margin:isSmallScreen?"0 3%":"0" }}>
              <SideCard children={""} header={"Company Name"} slogan={"Company slogan"} location={"Street Address 2012 City City Ci Zip code"} contact={"+012 000 0025"} email={"emailAddress@ezamazwe.com"} />
            </Box>
            <Box sx={{ width: isSmallScreen ? "94%" : "70%", margin:isSmallScreen?"0 3%":"0" }}>
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

                />
              </Box>
            </Box>
          </Box>


          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row", lg: "row", xl: "row" },
              marginTop: "50px",
              // marginLeft: { xs: "0px", sm: "0px", md: "20px", lg: "50px", xl: "70px" },
              marginBottom:"50px"
            }}
          >
            <Box
              sx={{
                width: { xs: "425px", sm: "770px", md: "400px", lg: "680px", xl: "610px" },
                marginLeft: {
                  xs: "0px",
                  sm: "0px",
                  md: "0px",
                  lg: "0px",
                  xl: "0px",
                },
                height: "393px",
                bgcolor: "#396781",
                color: "white",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins, sanserif",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.15px",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  width: { xs: "360px", sm: "500px", md: "350px", lg: "410px", xl: "410px" },
                  height: "144px",
                  marginTop: { xs: "25%", sm: "18%", md: "28%", lg: "28%", xl: "27%" },
                  marginLeft: { xs: "20px", sm: "120px", md: "25px", lg: "20px", xl: "20px" },
                }}
              >
                {desc}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14372.641308820334!2d28.26240085!3d-25.7652674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956057c13cbcc9%3A0x265c611461e24f9!2sLynnwood%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1701081112705!5m2!1sen!2sza"
                width="100%"
                height="393px"
                style={{
                  border: "0",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterComp />
    </>
  );
}

export default ContactUs;