const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.type("text/plain");
  response.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
