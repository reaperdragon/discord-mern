const serverStore = require("../serverStore");
const friendsUpdate = require("../socketHandlers/updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  //update pending invitations list
  friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);
};

module.exports = newConnectionHandler;
