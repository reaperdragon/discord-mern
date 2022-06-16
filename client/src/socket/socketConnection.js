import io from "socket.io-client";
import { setPendingFriendsInvitations } from "../app/actions/friendsActions";
import store from "../app/store";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("friends-invitation", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
