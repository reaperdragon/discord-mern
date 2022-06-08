const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const auth = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send("A token is Required For Authentication");
  }

  try {
    token = token.replace(/^Bearer\s+/, "");
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Credentials");
  }
  return next();
};

module.exports = auth;
