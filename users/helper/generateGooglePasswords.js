const lodash = require("lodash");

const generateGooglePasswords = async () => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*-";

  // Generate random characters for each category
  const randomUppercase = uppercaseChars[lodash.random(uppercaseChars.length)];
  const randomLowercase = lowercaseChars[lodash.random(lowercaseChars.length)];
  const randomNumber = numberChars[lodash.random(numberChars.length)];
  const randomSymbol = symbolChars[lodash.random(symbolChars.length)];

  // Generate the remaining characters randomly
  const remainingChars =
    uppercaseChars + lowercaseChars + numberChars + symbolChars;
  let randomChars = "";
  for (let i = 0; i < 5; i++) {
    randomChars += remainingChars[lodash.random(remainingChars.length)];
  }

  // Shuffle all characters
  const passwordCharacters =
    randomUppercase +
    randomLowercase +
    randomNumber +
    randomSymbol +
    randomChars;
  const shuffledPassword = passwordCharacters
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
  console.log(shuffledPassword);

  return shuffledPassword;
};
module.exports = generateGooglePasswords;
