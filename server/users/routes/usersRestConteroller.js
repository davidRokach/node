const express = require("express");
const auth = require("../../auth/authService");
const {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  changeUserBusinessStatus,
  deleteUser,
} = require("../modules/userAccessData");
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
router.get("/", auth, async (req, res) => {
  try {
    const { isAdmin } = req.user;
    if (!isAdmin)
      return handleError(res, 403, "Access denied. you must be an admin user");

    const users = await getUsers();
    res.send(users);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
router.get("/:id", auth, async (req, res) => {
  try {
    const { _id, isAdmin } = req.user;
    const { id } = req.params;

    if (_id !== id && !isAdmin)
      return handleError(
        res,
        403,
        "Access denied. you muse be an admin user to see all the users in the database."
      );

    const user = await getUser(id);
    return res.send(user);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
router.put("/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = req.user;

    if (userId !== user._id)
      return handleError(
        res,
        403,
        "Authorization Error: You must be the registered user to update its details"
      );

    const { error } = validateRegistration(req.body);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const normalizedUser = normalizedUser(req.body);

    const newUser = await updateUser(userId, normalizedUser);

    return res.send(newUser);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});
router.patch("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    if (id !== user._id && !user.isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must bean an admin type user or the registered user to update its business status"
      );

    const changedStatusUser = await changeUserBusinessStatus(id);
    return res.send(changedStatusUser);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    if (id !== user._id && !user.isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin type user or the registered user to delete this user"
      );

    const userDeleted = await deleteUser(id);
    return res.send(userDeleted);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.use((req, res) => handleError(res, 404, "Page Not Found in users!"));

module.exports = router;
