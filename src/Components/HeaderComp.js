import { Box, Container, Typography } from "@mui/material";
import bgImage from "../Assets/Images/bg.jpg";
import { Description } from "@mui/icons-material";
import SideCard from "./SideCard";

export const HeaderComp = ({ Header, Description }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "primary.light",
            opacity: "0.6",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            margin: "0 5%",
            height: "100%",
            top: "0",
            zIndex: "50",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {Header}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", width: "80%" }}
            >
              {Description}
            </Typography>
          </Box>
        </Box>
        <SideCard
          header={"Company Name"}
          slogan={"Company Slogan."}
          location={"Street Address 2012 City City City City Zip code"}
          contact={"+012 000 0025"}
          email={"emailAddress@host.com"}
        />
      </Box>
    </>
  );
};
