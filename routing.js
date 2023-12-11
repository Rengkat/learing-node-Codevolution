const http = require("node:http");

const server = http.createServer((req, res) => {
  //req give some prop. url is one of them
  //   res.end(req.url);
  if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("About");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("contact");
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home");
  } else {
    res.writeHead(404);
    res.end("Sorry");
  }

  //   res.writeHead(200, { "Content-type": "application/json" });
});
server.listen(3000, () => {
  console.log("server running ");
});
