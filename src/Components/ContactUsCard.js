import React, { useState } from "react";
import { Box, Typography, OutlinedInput, Grid, useMediaQuery } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ContactUsFunction } from "../Services/CourseService";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
function ContactUsCard({
  header,
  description,
  name,
  secondname,
  email,
  subject,
  label,
  Desc,
}) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailA, setEmail] = useState('');
  const [subjects, setSubject] = useState('');
  const [message, setMessage] = useState('')


  const handleSendMessage = async () => {
    // console.log(firstName, lastName, emailA, subjects, message);
    try {
      await ContactUsFunction(firstName, lastName, emailA, subjects, message);
      alert("Message sent successfully.")

    } catch (error) {

      alert("Something went wrong. Please try again.");
      console.log("Error sending message:", error);
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ marginTop:isSmallScreen?"50px": "130px" }}>
        {/* <Typography
          sx={{
            color: "#396781",
            fontFamily: "Poppins, sanserif",
            fontWeight: "700",
            fontSize: { xs: "40px", sm: "50px", md: "50px", lg: "50px", xl: "50px" },
            lineHeight: "60.51px",
            // marginLeft: { xs: "10px", sm: "19%", md: "45%", lg: "48%", xl: "50%" },
            width: "100%",
            textAlign: "center"
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sanserif",
            fontWeight: "400",
            fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "20px", xl: "20px" },
            lineHeight: "24.2px",
            alignItems: "center",
            // marginLeft: { xs: "10px", sm: "19%", md: "42%", lg: "46%", xl: "48.5%" },
            width: "100%",
            textAlign: "center"
          }}
        >
          {description}
        </Typography> */}
         <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SectionHeading children={header} />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SectionSubHeading children={description} />
                        </Box>
      </Box>
      <Box sx={{ width: "94%", margin: "70px 3% 3% 3%" }}>
        <Box sx={{ display: "flex", flexDirection: "row", }}>
          <Box sx={{ width: "48%", margin: "0 1%" }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#396781",
                fontFamily: "Poppins, sanserif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "28px",
                letterSpacing: "0.15",
              }}
            >
              {name}
            </Typography>
            <OutlinedInput
              sx={{
                width: "100%",
                height: "48px",
                borderRadius: "12px",
                bgcolor: "#E3ECF1",
                padding: "8px 12px 8px 12px",
                gap: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781",
                  borderWidth: 2,
                },
                "&:hover > .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781",
                },
              }}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
          <Box sx={{ width: "48%", margin: "0 1%" }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#396781",
                fontFamily: "Poppins, sanserif",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "28px",
                letterSpacing: "0.15",
              }}
            >
              {secondname}
            </Typography>
            <OutlinedInput
              sx={{
                width: "100%",
                height: "48px",
                borderRadius: "12px",
                bgcolor: "#E3ECF1",
                padding: "8px 12px 8px 12px",
                gap: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781",
                  borderWidth: 2,
                },
                "&:hover > .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781",
                },
              }}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#396781",
              fontFamily: "Poppins, sanserif",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0.15",
            }}
          >
            {email}
          </Typography>
          <OutlinedInput
            sx={{
              width: "100%",
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#E3ECF1",
              padding: "8px 12px 8px 12px",
              gap: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
                borderWidth: 2,
              },
              "&:hover > .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#396781",
              fontFamily: "Poppins, sanserif",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0.15",
            }}
          >
            {subject}
          </Typography>
          <OutlinedInput
            sx={{
              width: "100%",
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#E3ECF1",
              padding: "8px 12px 8px 12px",
              gap: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
                borderWidth: 2,
              },
              "&:hover > .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
              },
            }}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#396781",
              fontFamily: "Poppins, sanserif",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0.15",
            }}
          >
            {label}
          </Typography>
          <OutlinedInput
            sx={{
              width: "100%",
              height: "120px",
              borderRadius: "12px",
              bgcolor: "#E3ECF1",
              padding: "8px 12px 8px 12px",
              gap: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
                borderWidth: 2,
              },
              "&:hover > .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
              },
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <button
            style={{
              width: "170px",
              height: "60px",
              borderRadius: "50px",
              border: "none",
              padding: "0px 16px 0px 16px",
              gap: "16px",
              backgroundColor: "#396781",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
            }}
            onClick={handleSendMessage}
          >
            Send <SendIcon />
          </button>
        </Box>
      </Box>
      <br></br>

    </Box>
  );
}

export default ContactUsCard;
