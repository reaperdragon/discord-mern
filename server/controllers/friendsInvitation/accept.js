const FriendsInvitation = require("../../models/friendInvitation");
const { StatusCodes } = require("http-status-codes");
const friendsUpdates = require("../../socketHandlers/updates/friends");
const User = require("../../models/user");

const accept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await FriendsInvitation.findById({ _id: id });

    if (!invitation) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send("Error Ocurred. Please Try Again");
    }

    const { senderId, receiverId } = invitation;

    // add friends to both users

    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    // Delete Invitation

    await FriendsInvitation.findByIdAndDelete(id);

    //update list of the friends if users are online
    friendsUpdates.updateFriends(senderId.toString());
    friendsUpdates.updateFriends(receiverId.toString());

    //update lists of friends pending invitations
    friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

    return res.status(StatusCodes.OK).send("Friend Successfully Added!");
  } catch (error) {
    return res
      .status(StatusCodes.CONFLICT)
      .send("Something went wrong. Please Try Again");
  }
};

module.exports = { accept };
