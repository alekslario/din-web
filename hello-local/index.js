var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Hello World!");
  })
  .listen(8000, function () {
    console.log("Server running ...");
  });
