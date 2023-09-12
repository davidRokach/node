const config = require("config");
const { verifyToken } = require("./Providers/jwt");
const handleError = require("../utils/errorHandler");

const tokenGenerator = config.get("TOKEN_GENERATOR") || jwt;

const auth = (req, res, next) => {
  if (tokenGenerator === "jwt") {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.status(401).send("Access denied. Please Login");

      const userInfo = verifyToken(token);
      if (!userInfo)
        return res.status(401).send("Access denied. Unauthorized User");

      req.user = userInfo;
      return next();
    } catch (error) {
      return handleError(res, 500, error.message);
    }
  }
};
module.exports = auth;
