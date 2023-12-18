const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  let filePath;
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    filePath = path.join(__dirname, "my-cli", "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      res.end(data);
    });
  }
});
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
