const config = require("config");

const jwt = require("jsonwebtoken");

//retrieves token, verifies it, and return the decoded token with info of the user
module.exports = (req, res, next) => {
  const token = req.header("authentication-token");
  const decoded = jwt.verify(token, config.get("jsonWebTokenSecret"));
  console.log(decoded);
  req.user = decoded.user;
  next(); //more middleware
};
