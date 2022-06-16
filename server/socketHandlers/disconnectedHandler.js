const serverStore = require("../serverStore");

const disconnectHandler = (socket) => {
  serverStore.removeConnectedUser(socket.io);
};

module.exports = disconnectHandler;
