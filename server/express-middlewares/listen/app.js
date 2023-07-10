const express = require("express");
const app = express();
const chalk = require("chalk");

app.get("/", (req, res) => {
  res.send("in the node app ");
});

const PORT = 8181;
app.listen(PORT, () => {
  console.log(chalk.blue.bold(`server is listening on ${PORT}`));
});
