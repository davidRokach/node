const express = require("express");
const router = express.Router();
// const lodash = require("lodash");
const handleError = require("../../utils/errorHandler");
const {
  getCards,
  getMyCards,
  createCard,
  findOneCard,
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
    const userId = "123456";
    const card = await getMyCards(userId);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await findOneCard(id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const rawCard = req.body;
    const { error } = validateCard(rawCard);
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
    const card = await updateCard(req.params.id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = "123456";
    const card = await likeCard(id, userId);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await removeCard(id);
    res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.use((req, res) => handleError(res, 404, "Page Not Found in cards!"));

module.exports = router;
