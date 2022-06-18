import React from "react";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import CloseFullScreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenFullScreenIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: "white" }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenFullScreenIcon /> : <CloseFullScreenIcon />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
