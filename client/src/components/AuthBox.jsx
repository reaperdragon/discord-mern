import React from "react";
import Box from "@mui/material/Box";

import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865f2",
  fontFamily:'Poppins'
});

const AuthBox = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "10px",
          boxShadow: "0 2px 10px 0 rgba(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          fontFamily:'Poppins'
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
