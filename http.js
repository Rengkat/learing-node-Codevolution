const josn = require("./data.json");
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Alexander";
  //response code on the header and the content type of the response that wil be send
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  //   the readFileSync read the entire file which is not efficent instead use createreadstream
  res.writeHead(200, { "Content-type": "text/html" });
  //?content type: text/plain, text/html/, application/json
  //end the res with what need to be done
  res.end(html);
  // !  fs.createReadStream(__dirname + "/index.html").pipe(res);
});
server.listen(3000, () => {
  console.log("server running");
});
