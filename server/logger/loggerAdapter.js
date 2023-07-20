const morganLogger = require("./loggers/morgan");
const express = require("express");
const app = express();

const LOGGER = require("morgan");

if (LOGGER === "morgan") {
  app.use(morganLogger());
}
module.exports = app;
