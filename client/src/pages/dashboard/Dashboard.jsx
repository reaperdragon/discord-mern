import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { SideBar, FriendsSidebar, Messenger, AppBar } from "../../components";
import logout from "../../utils/logout";
import { connect } from "react-redux";
import { getActions } from "../../app/actions/authActions";
import { connectWithSocketServer } from "../../socket/socketConnection";
import { Room } from "../../components";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails, isUserInRoom }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [setUserDetails]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);
