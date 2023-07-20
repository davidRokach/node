const express = require("express");
const app = express();
const router = require("./router/router");
const chalk = require("chalk");
const { handleError } = require("./utils/errorHandler");
const cors = require("cors");
const morgan = require("morgan");
// const logger = require("./logger/loggerAdapter");

// app.use(
//   morgan(
//     chalk.cyanBright("[:date[clf]] :method :url :status :response-time ms")
//   )
// );
// app.use(
//   morgan((tokens, req, res) => {
//     const method = tokens.method(req, res);
//     const url = tokens.url(req, res);
//     const status = tokens.status(req, res);
//     const dash = "-";
//     const responseTime = tokens["response-time"](req, res);
//     const ms = "ms";

//     const arr = [method, url, status, dash, responseTime, ms];
//     return arr.join(" ");
//   })
// );

// app.use(logger());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:5500"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.text());
app.use(express.static("./public"));

app.use(router);

router.use((err, req, res, next) => {
  handleError(req, 500, err.message);
});

const PORT = 8181;
app.listen(PORT, () => {
  console.log(chalk.blue.bold(`server is listening on ${PORT}`));
});
