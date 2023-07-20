const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("in users registration");
  res.send("in users registration");
});
router.post("/login", (req, res) => {
  console.log("in users login");
  res.send("in users login");
});

router.use((req, res) => handleError(res, 404, "Page Not Found in users!"));

module.exports = router;
