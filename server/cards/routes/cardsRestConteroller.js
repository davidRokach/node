const express = require("express");
const router = express.Router();
const handleError = require("../../utils/errorHandler");
const {
  getCards,
  getMyCards,
  createCard,
  getCard,
  updateCard,
  likeCard,
  removeCard,
} = require("../modules/cardsAccessData");
const validateCard = require("../validations/cardValidasionService");
const normalizedCard = require("../helper/normalizedcard");

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/my-cards", async (req, res) => {
  try {
    const userId = "507f1f77bcf86cd799439011";
    const cards = await getMyCards(userId);
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await getCard(id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const rawCard = req.body;
    const { isBusiness, _id } = req.user;

    if (!isBusiness)
      return handleError(
        res,
        403,
        "Access denied. you must be an business user"
      );

    const { error } = validateCard(rawCard, _id);
    if (error) return handleError(res, 400, error.details[0].message);

    const card = await normalizedCard(rawCard);
    const cardFormDB = await createCard(card);
    res.send(cardFormDB);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const rawCard = req.body;
    const { id } = req.params;
    const { _id } = req.user;

    if (_id !== id)
      return handleError(
        res,
        403,
        "Access denied. only the user that create the card can edit the card"
      );

    const { error } = validateCard(rawCard);
    if (error) return handleError(res, 400, error.details[0].message);

    const card = await normalizedCard(rawCard, _id);
    const cardFormDB = await updateCard(id, card);
    res.send(cardFormDB);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user._id;

    if (!userId)
      return handleError(
        res,
        403,
        "Access denied. Only logged in user in can like card "
      );

    const card = await likeCard(id, userId);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { _id, isAdmin } = req.user;

    if ((_id !== id) & !isAdmin)
      return handleError(
        res,
        403,
        "Access denied. only the user that create the card and admin user can delete the card "
      );

    const card = await removeCard(id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.use((req, res) => handleError(res, 404, "Page Not Found in cards!"));

module.exports = router;
