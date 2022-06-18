import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
