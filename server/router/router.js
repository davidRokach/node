const express = require("express");
const router = express.Router();
const cardsRestController = require("../cards/routes/cardsRestConteroller");
const usersRestController = require("../users/usersRestConteroller");
const handleError = require("../utils/errorHandler");

router.use("/cards", cardsRestController);
router.use("/users", usersRestController);

router.use((req, res) => handleError(res, 404, "Page Not Found!"));

module.exports = router;
