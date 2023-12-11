//data move from file to another in chunk
//in order o read data in chunk
const fs = require("node:fs");
const zlib = require("node:zlib");
//first create a readable stream on what you want to read it in the other file
const readableStream = fs.createReadStream("./another.txt", {
  encoding: "utf-8",
  highWaterMark: 4, //the number of characters to be stream in chucks
});
//now create a wite stream that will be on the read stream
const writableStream = fs.createWriteStream("./another2.txt");
//extend the emitter class by doing something on the readable stream
readableStream.on("data", (chunk) => {
  writableStream.write(chunk);
  console.log(chunk);
});
const anotherWriteableStream = fs.createWriteStream("./practice.txt");
readableStream.on("data", (chunk) => {
  anotherWriteableStream.write(chunk);
});
//1.create a writable stream
//2.create a readable stream of existing file
//on function on the readable stream to read it in chunk
//inside the function, write the chunk in the writable stream
// the pipe method can be used instead of the emitter class
readableStream.pipe(writableStream);
//using zlib for chaining
const gzib = zlib.createGzip();
const writeable2 = fs.createWriteStream("./createWithPipe.txt.gz");
readableStream.pipe(gzib).pipe(writeable2);
