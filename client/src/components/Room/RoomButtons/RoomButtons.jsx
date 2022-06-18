import React from "react";
import { styled } from "@mui/system";
import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = () => {
  return (
    <MainContainer>
      <ScreenShareButton />
      <MicButton />
      <CloseRoomButton />
      <CameraButton />
    </MainContainer>
  );
};

export default RoomButtons;
