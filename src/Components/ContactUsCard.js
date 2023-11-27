import React from "react";
import { Box, Typography, OutlinedInput } from "@mui/material";
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
      <Box sx={{ marginTop: {xs: "900px", xl: "120px"} }}>
        <Typography
          sx={{
            color: "#396781",
            fontFamily: "Poppins, sanserif",
            fontWeight: "700",
            fontSize: {xs: "40px", xl: "50px"},
            lineHeight: "60.51px",
            marginLeft: {xs: "10px",xl: "50%"},
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sanserif",
            fontWeight: "400",
            fontSize: {xs: "15px", xl: "20px"},
            lineHeight: "24.2px",
            alignItems: "center",
            marginLeft: {xs: "10px",xl: "48.5%"},
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ marginLeft: {xs: "10px", xl: "35%"}, marginTop: "120px" }}>
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
                width: {xs: "200px", xl: "550px"},
                height: "48px",
                borderRadius: "12px",
                bgcolor: "#E3ECF1",
                padding: "8px 12px 8px 12px",
                gap: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781",
                  borderWidth: 2
              },
              "&:hover > .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781"
              }
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
                width: {xs: "200px", xl: "550px"},
                height: "48px",
                borderRadius: "12px",
                bgcolor: "#E3ECF1",
                padding: "8px 12px 8px 12px",
                gap: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781",
                  borderWidth: 2
              },
              "&:hover > .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#396781"
              }
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
              width: {xs: "410px", xl: "1110px"},
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#E3ECF1",
              padding: "8px 12px 8px 12px",
              gap: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
                borderWidth: 2
            },
            "&:hover > .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781"
            }
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
              width: {xs: "410px", xl: "1110px"},
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#E3ECF1",
              padding: "8px 12px 8px 12px",
              gap: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
                borderWidth: 2
            },
            "&:hover > .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781"
            }
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
              width: {xs: "410px", xl: "1110px"},
              height: "120px",
              borderRadius: "12px",
              bgcolor: "#E3ECF1",
              padding: "8px 12px 8px 12px",
              gap: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781",
                borderWidth: 2
            },
            "&:hover > .MuiOutlinedInput-notchedOutline": {
                borderColor: "#396781"
            }
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
          height: "100%",
          display: "flex",
          flexDirection: {xs: "column", xl: "row"},
          marginTop: "50px",
          marginLeft: {xs: "0px", xl: "70px"},
        }}
      >
        <Box
          sx={{
            width: {xs: "410px", xl: "450px"},
            marginLeft: {xs: "10px", sm: "0px", md: "0px", lg: "0px", xl: "0px"},
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
              width: {xs: "360px", xl: "410px"},
              height: "144px",
              marginTop: "25%",
              marginLeft: "20px",
            }}
          >
            {Desc}
          </Typography>
        </Box>
        <Box sx={{width: "100%"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14372.641308820334!2d28.26240085!3d-25.7652674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956057c13cbcc9%3A0x265c611461e24f9!2sLynnwood%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1701081112705!5m2!1sen!2sza"
            width={"1279px"}
            height="393px"
            style={{ border: "0", marginLeft: {xs: "10px", sm: "0px", md: "0px", lg: "0px", xl: "0px"} }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUsCard;
