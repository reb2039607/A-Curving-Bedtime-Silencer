var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Free Challenge App!");
});
app.listen(port, function() {
  console.log("App is listen to port:", port);
});
