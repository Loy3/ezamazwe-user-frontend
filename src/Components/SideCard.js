import React from "react";
import { Box, Typography, Link, useMediaQuery } from "@mui/material";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import sidebg from "../Assets/Images/sidebg.png";
import fbIcon from "../Assets/Icons/facebook.png";
import insIcon from "../Assets/Icons/instagram.png";
import lnIcon from "../Assets/Icons/linkedin.png";
import twIcon from "../Assets/Icons/twitter.png";

function SideCard({ children, header, slogan, location, contact, email }) {
  const isMediumScreen = useMediaQuery("(max-width:800px)");
  return (
    <Box sx={{ width: "100%", height: "100", display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          // width: { xs: "425px", sm: "425px", md: "400px", lg: "450px", xl: "450px" },
          height: "800px",
          bgcolor: "#E3ECF5",
          // gap: "50px",
          marginLeft: "0",
          // marginLeft: { xs: "0px", sm: "50px", md: "20px", lg: "50px", xl: "70px" },
          zIndex: 1,
          position: "relative"
        }}
      >
        <Box sx={{ width: "90%", margin: "20px 5%" }}>
          {isMediumScreen ?
            <>
              <Typography variant="h5" component="h5" sx={{ color: 'primary.main', fontWeight: "bold", lineHeight: "125%", letterSpacing: "0.25px" }}>
                {header}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400", }}>
                {slogan}
              </Typography>
            </>
            :
            <>
              <SectionHeading>{header}</SectionHeading>
              <SectionSubHeading>{slogan}</SectionSubHeading>
            </>
          }
        </Box>
        <Box sx={{ width: "84%", margin: "50px 8% 30px 8%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              alignSelf: "center",
              width: "auto",
              height: "auto",
            }}
          >
            <Box sx={{
              width: isMediumScreen ? "20px" : "30px",
              height: isMediumScreen ? "20px" : "30px",
              boxSizing: "border-box",
              backgroundColor: "primary.light",
              borderRadius: "100%",
            }}>
              <LocationOnSharpIcon
                sx={{
                  // bgcolor: "#396781",
                  color: "#E3ECF5",
                  width: isMediumScreen ? "14px" : "24px",
                  height: isMediumScreen ? "14px" : "24px",
                  margin: "3px"
                }}
              />
            </Box>
            <Typography
              variant={isMediumScreen ? "body1" : "subtitle1"}
              sx={{
                color: "black",
                fontFamily: "Poppins, sanserif",
                fontWeight: "400",
                // fontSize: "16px",
                lineHeight: isMediumScreen ? "24px" : "32px",
                letterSpacing: "0.10px",
                marginLeft: "8px",
                marginTop: "-10px",
                width: "196px",
                height: isMediumScreen?"auto": "98px",
                boxSizing: "border-box",
              }}
            >
              {location}
            </Typography>
          </Box>
          <br></br>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              alignSelf: "center",
              width: "auto",
              height: "auto",
            }}
          >
            <Box sx={{
              width: isMediumScreen ? "20px" : "30px",
              height: isMediumScreen ? "20px" : "30px",
              boxSizing: "border-box",
              backgroundColor: "primary.light",
              borderRadius: "100%",
            }}>
              <LocalPhoneSharpIcon
                sx={{
                  // bgcolor: "#396781",
                  color: "#E3ECF5",
                  width: isMediumScreen ? "14px" : "24px",
                  height: isMediumScreen ? "14px" : "24px",
                  margin: "3px"
                }}
              />
            </Box>
            <Typography
               variant={isMediumScreen ? "body2" : "subtitle1"}
               sx={{
                 color: "black",
                 fontFamily: "Poppins, sanserif",
                 fontWeight: "400",
                 // fontSize: "16px",
                 lineHeight: isMediumScreen ? "24px" : "32px",
                 letterSpacing: "0.10px",
                 marginLeft: "8px",
                //  marginTop: "5px",
                 width: "196px",
                 boxSizing: "border-box",
               }}
            >
              {contact}
            </Typography>
          </Box>
          <br></br>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMediumScreen?"column": "row",
              alignItems: "flex-start",
              alignSelf: "center",
              width: "auto",
              height: "auto",
            }}
          >
            <Box sx={{
              width: isMediumScreen ? "20px" : "30px",
              height: isMediumScreen ? "20px" : "30px",
              boxSizing: "border-box",
              backgroundColor: "primary.light",
              borderRadius: "100%",
            }}>
              <MailOutlineSharpIcon
                sx={{
                  // bgcolor: "#396781",
                  color: "#E3ECF5",
                  width: isMediumScreen ? "14px" : "24px",
                  height: isMediumScreen ? "14px" : "24px",
                  margin: "3px"
                }}
              />
            </Box>
            <Typography
              variant={isMediumScreen ? "body2" : "subtitle1"}
              sx={{
                color: "black",
                fontFamily: "Poppins, sanserif",
                fontWeight: "400",
                // fontSize: "16px",
                lineHeight: isMediumScreen ? "24px" : "32px",
                letterSpacing: "0.10px",
                marginLeft:isMediumScreen?"0": "8px",
              
                width: "196px",
                boxSizing: "border-box",
              }}
            >
              {email}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "70px",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "auto", display: "flex", flexDirection: "row", }}>
            <Link
              href="https://www.facebook.com/"
              sx={{
                textDecoration: "none",
                padding: "0 5px",
                color: "black",
                cursor: "pointer",
              }}
              target="_blank"
            >
              <img src={fbIcon} alt="socials" style={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                // bgcolor: "white",
                color: "#4267B2",
                // borderRadius: "100%",
              }} />
              {/* <FacebookSharpIcon
              sx={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                // bgcolor: "white",
                color: "#4267B2",
                borderRadius: "100%",
              }}
            /> */}
            </Link>
            <Link
              href="https://www.instagram.com/"
              sx={{
                textDecoration: "none",
                padding: "0 5px",
                color: "black",
                cursor: "pointer",
              }}
              target="_blank"
            >
              <img src={insIcon} alt="socials" style={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                // bgcolor: "white",
                color: "#4267B2",
                // borderRadius: "100%",
              }} />
              {/* <InstagramIcon
              sx={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                bgcolor: "#C13584",
                color: "white",
                borderRadius: "100%",
              }}
            /> */}
            </Link>
            <Link
              href="https://www.linkedin.com/"
              sx={{
                textDecoration: "none",
                padding: "0 5px",
                color: "black",
                cursor: "pointer",
              }}
              target="_blank"
            >
              <img src={lnIcon} alt="socials" style={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                // bgcolor: "white",
                color: "#4267B2",
                // borderRadius: "100%",
              }} />
              {/* <LinkedInIcon
              sx={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                color: "#0077b5",
                // bgcolor: "white",
                borderRadius: "100%",
              }}
            /> */}
            </Link>
            <Link
              href="https://twitter.com/"
              sx={{
                textDecoration: "none",
                padding: "0 5px",
                color: "black",
                cursor: "pointer",
              }}
              target="_blank"
            >
              <img src={twIcon} alt="socials" style={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                // bgcolor: "white",
                color: "#4267B2",
                // borderRadius: "100%",
              }} />
              {/* <TwitterIcon
              sx={{
                marginTop: "5px",
                width: "35px",
                height: "35px",
                bgcolor: "#08a0e9",
                color: "white",
                borderRadius: "100%",
              }}
            /> */}
            </Link>
          </Box>
        </Box>
        <Box sx={{ marginTop: "30px", width: "100%" }}>
          <Box
            sx={{
              backgroundImage: `url(${sidebg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "40%",
              position: "absolute",
              left: "0",
              bottom: "0"
            }}
          />
        </Box>
      </Box>
      {children}
    </Box>
  );
}

export default SideCard;
