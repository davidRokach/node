const ENVIROMENT = process.env.ENVIROMENT || "dev";
// const ENVIROMENT = "prod"

const connectToDB = () => {
  if (ENVIROMENT === "dev") require("./dataBases/connectToMongoDb");
  if (ENVIROMENT === "prod") require("./dataBases/connectToAtlas");
};

module.exports = connectToDB;
