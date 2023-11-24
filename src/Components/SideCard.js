import React from "react";
import { Box } from "@mui/material";
import SectionHeading from "./SectionHeading";

function SideCard({ children, header }) {
  return (
    <Box sx={{ width: "100%", height: "100" }}>
      <Box
        sx={{
          width: "450px",
          height: "869px",
          padding: "20px",
          bgcolor: "#E3ECF1",
          gap: "50px",
          marginLeft: "70px",
          zIndex: 1,
        }}
      >
        <Box sx={{marginLeft: "60px"}}>
          <SectionHeading>{header}</SectionHeading>
        </Box>
      </Box>
      {children}
    </Box>
  );
}

export default SideCard;
