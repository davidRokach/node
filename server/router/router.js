const express = require("express");
const router = express.Router();
const cardsRestController = require("../cards/routes/cardsRestConteroller");
const usersRestController = require("../users/routes/usersRestConteroller");
const handleError = require("../utils/errorHandler");
const mongoose = require("mongoose");

router.use("/cards", cardsRestController);
router.use("/users", usersRestController);

const schema = new mongoose.Schema({
  String: String,
  age: Number,
  isMarried: Boolean,
});

const Test = mongoose.model("test", schema);

router.post("/", async (req, res) => {
  try {
    const dataFromReqBody = req.body;
    const user = new Test(dataFromReqBody);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(chalk.redBright(`Mongoose Schema Error: ${err.message}`));
    handleError(res, 500, err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const instance = await Test.find();
    res.status(201).json(instance);
  } catch (error) {
    console.log(chalk.redBright(`Mongoose Schema Error: ${err.message}`));
    handleError(res, 500, err.message);
  }
});

router.get("/query", async (req, res) => {
  try {
    const instance = await Test.find(
      {
        //   age: {
        //     $gt: 50,
        //     // $eq: 23,
        //     // $lt: 2,
        //     // lte: 7,
        //   },
        //   isMarried: true,
        //   String: "gershon",
      },
      {
        String: 0,
        age: 0,
        _id: 0,
      }
    );
    res.status(201).json(instance);
  } catch (error) {
    console.log(chalk.redBright(`Mongoose Schema Error: ${err.message}`));
    handleError(res, 500, err.message);
  }
});

router.use((req, res) => handleError(res, 404, "Page Not Found!"));

module.exports = router;
