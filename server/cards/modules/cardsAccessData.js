const CardModel = require("./mongodb/Card");

const DB = process.env.DB || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve("in getCards");
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};

const getMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`my cards ${userId}`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};
const findOneCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no: ${cardId}`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};
const createCard = async (noramlizedCard) => {
  if (DB === "MONGODB") {
    try {
      const card = new CardModel(noramlizedCard);
      await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};

const updateCard = async (cardId, noramlizedCard) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no:${cardId} updated`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};

const likeCard = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no:${cardId} liked`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};

const removeCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no:${cardId} deleted`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards NOT in mongodb");
};

exports.getCards = getCards;
exports.getMyCards = getMyCards;
exports.findOneCard = findOneCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.removeCard = removeCard;
