const lodash = require("lodash");
const { add } = require("lodash");
const chalk = require("chalk");

const firstRandomUN = lodash.random(10, 100);
console.log(`Random number: ${firstRandomUN}`);

console.log(chalk.blue(add(2, 3)));
