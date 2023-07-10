const fs = require("fs");
console.log("ddfd");
const { mkdir, readdir, writeFile, rmdir, unlink, rm } = require("fs/promises");
const path = require("path");

const users = [
  { name: "David", last: "Rokach" },
  { name: "Moshey", last: "Rokach" },
  { name: "Gershon", last: "Rookach" },
];

const removeFileAndFolder = async () => {
  try {
    const filesUsers = await readdir(__dirname + "/users");
    filesUsers.forEach(async (file) => {
      if (path.extname(file) === ".txt") {
        await unlink(`${__dirname}/users/${file}`);
      }
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

const makeAndRemoveFileAndFolder = async () => {
  const isExist = fs.existsSync(`${__dirname}/users`);
  if (!isExist) {
    try {
      await mkdir(`${__dirname}/users`, { recursive: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  const filesUsers = await readdir(__dirname + "/users");
  if (!filesUsers.length) {
    try {
      users.forEach(async (user) => {
        await writeFile(
          `${__dirname}/users/${user.name}-${user.last}.txt`,
          `My user name is - ${user.name} ${user.last}`
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  try {
    await writeFile(`${__dirname}/users/test.pdf`, "test Hello World!");
  } catch (error) {
    console.log(error.message);
  }

  setTimeout(async () => {
    await removeFileAndFolder();
    await rm(`${__dirname}/users`, { force: true, recursive: true });
  }, 5000);
};
makeAndRemoveFileAndFolder();
