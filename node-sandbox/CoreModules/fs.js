const FileSystem = require("fs");
FileSystem.mkdir("./test", { recursive: true }, (error, path) => {
  if (error) return console.log(error.message);
  console.log(`created directory: ${path}`);
});

FileSystem.writeFile(__dirname + "/test/text.txt", "Hello World!", (error) => {
  if (error) return console.log(error.message);
  console.log(`created directory: /test/text.txt`);
});

setTimeout(() => {
  FileSystem.rm("./test", { recursive: true }, (error) => {
    if (error) return console.log(error.message);
    console.log(`Deleted directory: ./test`);
  });
}, 5000);
