import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#202225",
});

const SideBar = () => {
  return <MainContainer></MainContainer>;
};

export default SideBar;
