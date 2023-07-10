const OperatingSystem = require("os");

const totalMemoryGB = OperatingSystem.totalmem() / 1024 / 1024 / 1024;
const freeMemoryInGB = OperatingSystem.freemem() / 1024 / 1024 / 1024;

const memoryInfo = {
  total: `${totalMemoryGB.toFixed(2)} GB`,
  free: `${freeMemoryInGB.toFixed(2)} GB`,
};
console.table(memoryInfo);

const myOperatingSystem = OperatingSystem.platform();
const myVersion = OperatingSystem.version();
const myTyapeOpert = OperatingSystem.type();
const myHost = OperatingSystem.hostname();
const myArchutecture = OperatingSystem.arch();

const myPc = {
  myOperatingSystem: myOperatingSystem,
  myVersion: myVersion,
  myTyape: myTyapeOpert,
  myHost: myHost,
  myArchutecture: myArchutecture,
};

console.table(myPc);
