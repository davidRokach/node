const chalk = require("chalk");
const morgan = require("morgan");

const logger = morgan((tokens, req, res) => {
  const date = tokens.date[clf];
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const status = tokens.status(req, res);
  const dash = "-";
  const responseTime = tokens["response-time"](req, res);
  const ms = "ms";
  const arr = [date, method, url, status, dash, responseTime, ms];
  if (url >= 400) {
    return chalk.redBright(arr.join(" "));
  }
  return chalk.cyanBright(arr.join(" "));
});
module.exports = logger;
