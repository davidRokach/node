const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect(
    "mongodb+srv://david:QUg577AtdMETJSB5@cluster0.4qkibqt.mongodb.net//bussines-cards"
  )
  .then(() => console.log(chalk.magentaBright("Connected to Atlas MongoDB!")))
  .catch((err) =>
    console.log(
      chalk.redBright.bold(`Failed to connect to Atlas MongoDB!,${err}`)
    )
  );
