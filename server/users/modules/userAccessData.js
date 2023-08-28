const { comparePassword } = require("../helper/bcrypt");
const UserModel = require("./mongoDB/User");
const lodash = require("lodash");

const DB = process.env.DB || "MONGODB";

const register = async (noramlizedUser) => {
  if (DB === "MONGODB") {
    try {
      let user = await UserModel.findOne({ email: noramlizedUser.email });
      if (user) throw new Error("User already registered");
      user = UserModel(noramlizedUser);
      await user.save();
      user = lodash.pick(user, ["_id", "name", "email"]);
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("user created not in mongodb!");
};
const login = async (noramlizedUser) => {
  if (DB === "MONGODB") {
    try {
      let user = await UserModel.findOne({ email: noramlizedUser.email });
      if (!user) throw new Error("Invalid email or password");

      const isPasswordValid = await comparePassword(
        noramlizedUser.password,
        user.password
      );
      if (!isPasswordValid) throw new Error("Invalid email or password");
      return Promise.resolve("user is logged in");
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("user created not in mongodb!");
};

exports.login = login;
exports.register = register;
