const chalk = require("chalk");

const handleError = (res, status, message = "") => {
  console.log(chalk.red.bold(message));
  res.status(status).send(message);
};
module.exports = handleError;
