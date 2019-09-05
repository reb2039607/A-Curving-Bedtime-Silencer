const db = require("../models");
const path = require("path");

module.exports = function(app) {
  app.get("/createTask", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createTask.html"));
  });

  app.get("/alltasks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/allTask.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
