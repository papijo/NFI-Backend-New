const jwt = require("jsonwebtoken");
const config = require("./config");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, config.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is InValid!!!!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not Authenticated");
  }
};
module.exports = {
  verifyToken,
};
