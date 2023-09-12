const express = require("express");
const router = express.Router();
const cardsRestController = require("../cards/routes/cardsRestConteroller");
const usersRestController = require("../users/routes/usersRestConteroller");
const handleError = require("../utils/errorHandler");
const mongoose = require("mongoose");
const chalk = require("chalk");
const lodash = require("lodash");

router.use("/", async (req, res) => {
  try {
    res.status(200).json("Hello world");
  } catch (error) {
    res.status(500).json(error.massege);
  }
});
router.use("/cards", cardsRestController);
router.use("/users", usersRestController);

// const schema = new mongoose.Schema({
//   String: String,
//   age: Number,
//   isMarried: Boolean,
// });

// const Test = mongoose.model("test", schema);

// router.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.status(201).json(user);
//   } catch (err) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${err.message}`));
//     handleError(res, 500, err.message);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const instance = await Test.find();
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${err.message}`));
//     handleError(res, 500, err.message);
//   }
// });

// router.get("/query", async (req, res) => {
//   try {
//     const instance = await Test.find(
//       {
//         //   age: {
//         //     $gt: 50,
//         //     // $eq: 23,
//         //     // $lt: 2,
//         //     // lte: 7,
//         //   },
//         //   isMarried: true,
//         //   String: "gershon",
//       },
//       {
//         String: 0,
//         age: 0,
//         _id: 0,
//       }
//     );
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${err.message}`));
//     handleError(res, 500, err.message);
//   }
// });

// router.get("/query/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findOne({ _id: id });
//     if (!instance) {
//       handleError(res, 500, "page not found");
//       return;
//     }
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     handleError(res, 500, error.message);
//   }
// });

// router.get("/select", async (req, res) => {
//   try {
//     const instance = await Test.find().select(["String", "age", "-_id"]);
//     if (!instance) {
//       handleError(res, 500, "page not found");
//       return;
//     }
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     handleError(res, 500, error.message);
//   }
// });

// router.get("/sort", async (req, res) => {
//   try {
//     const instance = await Test.find().sort({
//       age: -1,
//     });
//     if (!instance) {
//       handleError(res, 500, "page not found");
//       return;
//     }
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     handleError(res, 500, error.message);
//   }
// });
// router.get("/selectAndSort", async (req, res) => {
//   try {
//     const instance = await Test.find().select(["String", "-_id"]).sort({
//       age: -1,
//     });
//     if (!instance) {
//       handleError(res, 500, "page not found");
//       return;
//     }
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     handleError(res, 500, error.message);
//   }
// });
// router.get("/count", async (req, res) => {
//   try {
//     // const instance = await Test.countDocuments();
//     const count = await Test.find().count();
//     res.status(200).json({
//       count,
//     });
//   } catch (err) {
//     handleError(res, 500, err.message);
//   }
// });

// router.get("/findById/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findById(id);
//     if (!instance) {
//       handleError(res, 404, "Not found");
//       return;
//     }
//     res.status(200).json(instance);
//   } catch (err) {
//     handleError(res, 500, err.message);
//   }
// });

// router.put("/findByIdAndUpdate/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!instance) {
//       handleError(res, 404, "Not found");
//       return;
//     }
//     res.status(200).json(instance);
//   } catch (err) {
//     handleError(res, 500, err.message);
//   }
// });
// router.delete("/findByIdAndDelete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findByIdAndDelete(id);
//     if (!instance) {
//       handleError(res, 404, "Not found");
//       return;
//     }
//     res.status(200).json(instance);
//   } catch (err) {
//     handleError(res, 500, err.message);
//   }
// });

// router.patch("/changeBoolAndUpdate/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const pipeline = [{ $set: { bool: { $not: "$bool" } } }];
//     const data = await Test.findByIdAndUpdate(id, pipeline, { new: true });
//     if (!data) {
//       handleError(res, 404, "Not found");
//       return;
//     }
//     res.status(200).json(data);
//   } catch (err) {
//     handleError(res, 500, err.message);
//   }
// });

// router.get("/lottery", async (req, res) => {
//   try {
//     const random = lodash.random(1, 3);
//     const instance = await Test.find(
//       {
//         age: random,
//       },
//       { age: 1, _id: 0 }
//     );
//     if (!instance) {
//       handleError(res, 500, "page not found");
//       return;
//     }
//     res.status(201).json(instance);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     handleError(res, 500, error.message);
//   }
// });

router.use((req, res) => handleError(res, 404, "Page Not Found!"));

module.exports = router;
