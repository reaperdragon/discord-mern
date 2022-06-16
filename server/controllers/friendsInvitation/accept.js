const FriendsInvitation = require("../../models/friendInvitation");
const { StatusCodes } = require("http-status-codes");
const friendsUpdates = require("../../socketHandlers/updates/friends");

const accept = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    const invitationExists = await FriendsInvitation.exists({ _id: id });

    if (invitationExists) {
      await Invitation.findByIdAndDelete(id);
    }

    friendsUpdates.updateFriendsPendingInvitations(userId);

    return res.status(StatusCodes);
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Something went Wrong Please Try Again.");
  }
};

module.exports = { accept };
