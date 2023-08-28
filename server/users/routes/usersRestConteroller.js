const express = require("express");
const { register, login } = require("../modules/userAccessData");
const handleError = require("../../utils/errorHandler");
const {
  validateRegistration,
  validateLogin,
} = require("../validations/userValidationService");
const normalizedUser = require("../helper/normalizedUser");
const { generateUserPassword } = require("../helper/bcrypt");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const rawUser = req.body;

    const { error } = validateRegistration(rawUser);
    if (error) {
      return handleError(res, 400, error.details[0].message);
    }

    const user = await normalizedUser(rawUser);
    user.password = await generateUserPassword(rawUser.password);

    const userFormDB = await register(user);
    return res.status(201).send(userFormDB);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
router.post("/login", async (req, res) => {
  try {
    const rawUser = req.body;
    const { error } = validateLogin(rawUser);
    if (error) {
      return handleError(res, 400, error.details[0].message);
    }
    const user = await login(rawUser);
    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.use((req, res) => handleError(res, 404, "Page Not Found in users!"));

module.exports = router;
