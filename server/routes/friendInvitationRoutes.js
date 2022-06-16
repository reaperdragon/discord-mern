const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const { invite } = require("../controllers/friendsInvitation/invite");
const { accept } = require("../controllers/friendsInvitation/accept");
const { reject } = require("../controllers/friendsInvitation/reject");

const postFriendInvitationSchema = Joi.object({
  targetEmailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router
  .route("/invite")
  .post(validator.body(postFriendInvitationSchema), invite);

router.route('/accept').post(validator.body(inviteDecisionSchema), accept);

router.route('/reject').post(validator.body(inviteDecisionSchema), reject);

module.exports = router;
