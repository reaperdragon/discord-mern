const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdate = require("../../socketHandlers/updates/friends");

const invite = async (req, res) => {
  const { targetEmailAddress } = req.body;

  const { userId, email } = req.user;

  // check if friend that we would like to is not user

  if (email.toLowerCase() === targetEmailAddress.toLowerCase()) {
    return res
      .status(StatusCodes.CONFLICT)
      .send("Sorry, You cannot become friend with yourself");
  }

  const targetUser = await User.findOne({
    email: targetEmailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send(
        `Friend of ${targetEmailAddress} has been not Found. please Check Email Address. `
      );
  }

  //check if invitation has been already send

  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return res
      .status(StatusCodes.CONFLICT)
      .send("Invitation has been already send!");
  }

  const userAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (userAlreadyFriends) {
    return res
      .status(StatusCodes.CONFLICT)
      .send("Friend already Added. Please Check Friends List");
  }

  const newInvitation = await FriendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  //send pending invitations update to specific user

  friendsUpdate.updateFriendsPendingInvitations(targetUser._id.toString());

  return res.status(StatusCodes.CREATED).send("Invitation Has Been Sent!");
};

module.exports = { invite };
