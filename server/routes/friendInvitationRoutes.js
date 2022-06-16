const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middlewares/auth");
const { invite } = require("../controllers/friendsInvitation/invite");

const postFriendInvitationSchema = Joi.object({
  targetEmailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router
  .route("/invite")
  .post(validator.body(postFriendInvitationSchema), invite);

module.exports = router;
