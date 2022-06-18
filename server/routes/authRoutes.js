const express = require("express");
const { register, login } = require("../controllers/auth/auth");
const auth = require("../middlewares/auth");

const rateLimiter = require("express-rate-limit");

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

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

router
  .route("/register")
  .post(apiLimiter, validator.body(registerSchema), register);
router.route("/login").post(apiLimiter, validator.body(loginSchema), login);

module.exports = router;
