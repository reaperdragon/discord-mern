import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { SideBar, FriendsSidebar, Messenger, AppBar } from "../../components";
import logout from "../../utils/logout";
import { connect } from "react-redux";
import { getActions } from "../../app/actions/authActions";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
