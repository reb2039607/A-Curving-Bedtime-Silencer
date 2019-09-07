const db = require("../models");
const path = require("path");

module.exports = function(app) {
  app.get("/createTask", function(req, res) {
    res.sendFile(path.join(__dirname, "../createTask.html"));
  });

  app.get("/alltasks", function(req, res) {
    res.sendFile(path.join(__dirname, "../allTask.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../signup.html"));
  });
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });
};
