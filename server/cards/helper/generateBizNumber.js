const lodash = require("lodash");
const handleError = require("../../utils/errorHandler");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(1_000_000, 9_999_999);
    // const card = await Card.finsOne({ bizNumber: random });
    const card = await Promise.resolve(null);
    if (card) return generateBizNumber();
    return card;
  } catch (error) {
    return handleError("GenerateBizNumber", 500, error.message);
  }
};

module.exports = generateBizNumber;
