const http = require("http");

http
  .createServer(function (request, response) {
    response.write("Hello World!");
    response.end();
  })
  .listen(8000, function () {
    console.log("Server started on port 8000");
  });
