const express = require("express");
const router = express.Router();
// const lodash = require("lodash");
const { remove, isUndefined } = require("lodash");

router.get("/", (req, res) => {
  const array = [1, 2, undefined, 3, 4, undefined];
  const resArr = remove(array, (n) => {
    return n % 2 == 1 && !isUndefined(n);
  });

  console.log("in cards get");
  res.send({ resArr });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("in cards get params", id);
  res.send("in cards get params");
});

router.post("/", (req, res) => {
  console.log("in cards post");
  res.send("in cards post");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log("in cards put", id);
  res.send("in cards put");
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log("in cards patch", id);
  res.send("in cards patch");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("in cards delete", id);
  res.send("in cards delete");
});

router.use((req, res) => handleError(res, 404, "Page Not Found in cards!"));

module.exports = router;
