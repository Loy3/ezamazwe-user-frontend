import React from "react";
import { Box, Typography, OutlinedInput, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ marginTop: { xs: "900px", sm: "900px", md: "120px", lg: "120px", xl: "120px" } }}>
        <Typography
          sx={{
            color: "#396781",
            fontFamily: "Poppins, sanserif",
            fontWeight: "700",
            fontSize: { xs: "40px", sm: "50px", md: "50px", lg: "50px", xl: "50px" },
            lineHeight: "60.51px",
            marginLeft: { xs: "10px", sm: "19%", md: "45%", lg: "48%", xl: "50%" },
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
            marginLeft: { xs: "10px", sm: "19%", md: "42%", lg: "46%", xl: "48.5%" },
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ marginLeft: { xs: "7px", sm: "5%", md: "44%", lg: "38%", xl: "35%" }, marginTop: "120px" }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Box>
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
                width: { xs: "200px", sm: "350px", md: "250px", lg: "400px", xl: "550px" },
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
            />
          </Box>
          <Box>
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
                width: { xs: "200px",sm: "350px", md: "250px", lg: "400px", xl: "550px" },
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
              width: { xs: "410px", sm: "710px", md: "510px", lg: "810px", xl: "1110px" },
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
              width: { xs: "410px", sm: "710px", md: "510px", lg: "810px", xl: "1110px" },
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
              width: { xs: "410px", sm: "710px", md: "510px", lg: "810px", xl: "1110px" },
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
          >
            Send <SendIcon />
          </button>
        </Box>
      </Box>
      <br></br>
      <Box
        sx={{
          width: {xs: "425px", sm: "770px", md: "1000px", lg: "1350px", xl: "1750px"},
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row", xl: "row" },
          marginTop: "50px",
          marginLeft: { xs: "0px", sm: "0px", md: "20px", lg: "50px", xl: "70px" },
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
              width: { xs: "360px",sm: "500px", md: "350px", lg: "410px", xl: "410px" },
              height: "144px",
              marginTop: {xs: "25%", sm: "18%", md: "28%", lg: "28%", xl: "27%"},
              marginLeft: {xs: "20px", sm: "120px", md: "25px", lg: "20px", xl: "20px"},
            }}
          >
            {Desc}
          </Typography>
        </Box>
        <Box sx={{width: "100%"}}>
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
  );
}

export default ContactUsCard;
