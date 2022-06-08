const express = require("express");
const { register, login } = require("../controllers/auth/auth");
const auth = require("../middlewares/auth");

const router = express.Router();

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

router.route("/register").post(validator.body(registerSchema), register);
router.route("/login").post(validator.body(loginSchema), login);

module.exports = router;
