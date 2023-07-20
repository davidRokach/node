const express = require("express");
const app = express();
const chalk = require("chalk");

app.get("/user", (req, res) => {
  res.send({ name: "David", age: "23" });
});

app.get("/headers", (req, res) => {
  const data = req.headers;
  res.send(data);
});

app.get("/params/:id", (req, res) => {
  const data = req.params.id;
  res.send({ name: "David", age: "23", id: data });
});

app.get("/query", (req, res) => {
  const { name, age } = req.query;
  res.send({ name: name, age: age });
});

app.put("/body", (req, res) => {
  console.log(req);
  res.send(req);
});

app.get("/user", (req, res) => {
  res.send({ name: "David", age: "23" });
});

app.post("/", (req, res) => {
  res.send([
    { name: "David", age: "23" },
    { name: "Moshey", age: "19" },
  ]);
});
app.patch("/3", (req, res) => {
  res.send("user like post ");
});
app.put("/2", (req, res) => {
  res.send("user was updated ");
});
app.delete("/1", (req, res) => {
  res.send("user deleted");
});

const PORT = 8181;
app.listen(PORT, () => {
  console.log(chalk.yellowBright(`server is listening on ${PORT}`));
});
