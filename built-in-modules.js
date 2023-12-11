//path
const path = require("node:path");
console.log(__dirname); //path to directory
console.log(__filename); //path to the filename
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
//fs
const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const text = fs.readFileSync("./file.txt", "utf-8"); //this will block cos its sync. therefore is best to make it async
fs.readFile("./file.txt", "utf-8", (err, data) => {
  //this is called error first function
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//writing to file with sync
// fs.readFileSync("./another.txt", "I have change the text");
fs.writeFile("./another.txt", "I am editing this text file and is append", { flag: "a" }, (err) => {
  //the flag is for appending it
  if (err) {
    console.log(err);
  } else {
    console.log("It has been edited");
  }
});
//using promise
fsPromise
  .readFile("./another.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//using async
const readFile = async () => {
  try {
    const read = await fsPromise.readFile("./file.txt", "utf-8");
    console.log(read);
  } catch (error) {
    console.log(error);
  }
};
readFile();
