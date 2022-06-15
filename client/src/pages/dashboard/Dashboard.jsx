import React from "react";
import { styled } from "@mui/system";
import { SideBar, FriendsSidebar, Messenger, AppBar } from "../../components";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
