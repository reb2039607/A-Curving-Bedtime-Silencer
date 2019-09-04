const path = require('path');
const passport = require('passport');
const db = require("../models");

module.exports = function(app) {

app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(dbUser) {
        console.log(dbUser);
      res.json(dbUser);
    });
  });

  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  
}