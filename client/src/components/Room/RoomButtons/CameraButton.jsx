import React from "react";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { useState } from "react";

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };

  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
