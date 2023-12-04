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

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [subjectErr, setSubjectErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  const [firstNameErrMsg, setFirstNameErrMsg] = useState('');
  const [lastNameErrMsg, setLastNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [subjectErrMsg, setSubjectErrMsg] = useState('');
  const [messageErrMsg, setMessageErrMsg] = useState('');

  const isEmailValid = (emailA) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailA);
  };

  const handleSendMessage = async () => {
    // console.log(firstName, lastName, emailA, subjects, message);

    try {

      try {
        if (isEmailValid(emailA) && firstName && lastName && subject && message) {

          await ContactUsFunction(firstName, lastName, emailA, subject, message);
          alert("Message sent successfully.");

          // Reset field data to default values
          setFirstName('');
          setLastName('');
          setEmail('');
          setSubject('');
          setMessage('');

        } else {
          if (!firstName) {
            setFirstNameErr(true);
            setFirstNameErrMsg("*input is required.");
          } else {
            setFirstNameErr(false);
            setFirstNameErrMsg("");
          }

          if (!lastName) {
            setLastNameErr(true);
            setLastNameErrMsg("*input is required.");
          } else {
            setLastNameErr(false);
            setLastNameErrMsg("");
          }

          if (!isEmailValid(emailA)) {
            setEmailErr(true);
            setEmailErrMsg("*Valid email address is required.");
            // alert("Valid email address is required.")
          } else {
            setEmailErr(false);
            setEmailErrMsg("");
          }

          if (!subjects) {
            setSubjectErr(true);
            setSubjectErrMsg("*input is required.");
          } else {
            setSubjectErr(false);
            setSubjectErrMsg("");
          }

          if (!message) {
            setMessageErr(true);
            setMessageErrMsg("*input is required.");
          } else {
            setMessageErr(false);
            setMessageErrMsg("");
          }

        }

      } catch (error) {

        alert("Something went wrong. Please try again.");
        console.log("Error sending message:", error);
      }

    } catch (error) {

      alert("Something went wrong. Please try again.");
      console.log("Error sending message:", error);
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ marginTop: isSmallScreen ? "50px" : "130px" }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <SectionHeading children={header} />
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* <SectionSubHeading children={description} />  */}
          <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: "400", textAlign: "left" }}>
            {description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "94%", margin: "70px 3% 3% 3%" }}>
        <Box sx={{ display: "flex", flexDirection: "row", }}>
          <Box sx={{ width: "49%", margin: "0 1% 0 0" }}>
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
            {firstNameErr && (
              <Typography
                variant="caption"
                sx={{
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {firstNameErrMsg}
              </Typography>
            )}
          </Box>

          <Box sx={{ width: "49%", margin: "0 0 0 1%" }}>
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
            {lastNameErr && (
              <Typography
                variant="caption"
                sx={{
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {lastNameErrMsg}
              </Typography>
            )}
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
          {emailErr && (
            <Typography
              variant="caption"
              sx={{
                color: "red",
                marginTop: "5px",
              }}
            >
              {emailErrMsg}
            </Typography>
          )}
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
          {subjectErr && (
            <Typography
              variant="caption"
              sx={{
                color: "red",
                marginTop: "5px",
              }}
            >
              {subjectErrMsg}
            </Typography>
          )}
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
          {messageErr && (
            <Typography
              variant="caption"
              sx={{
                color: "red",
                marginTop: "5px",
              }}
            >
              {messageErrMsg}
            </Typography>
          )}
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
