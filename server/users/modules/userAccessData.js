const UserModel = require("./mongoDB/User");

const DB = process.env.DB || "MONGODB";

const register = async (noramlizedUser) => {
  if (DB === "MONGODB") {
    try {
      const user = UserModel(noramlizedUser);
      await user.save();
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};
const login = async (noramlizedUser) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(noramlizedUser, "in login");
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

exports.login = login;
exports.register = register;
