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

  app.get("/api/task", function(req, res) {
    db.masterTask.findAll({}).then(function(dbMTask) {
      res.json(dbMTask);
    });
  });

  app.get("/api/task/userid/:userid", function(req, res) {
    db.masterTask.findAll({
        where: {
            userid: req.params.userid
        }
    }).then(function(dbMTask) {
      res.json(dbMTask);
    });
  });
  
  app.get("/api/task/title/:title", function(req, res) {
    db.masterTask.findAll({
        where: {
            title: req.params.title
        }
    }).then(function(dbMTask) {
      res.json(dbMTask);
    });
  });

  app.get("/api/task/taskstatus/:taskstatus", function(req, res) {
    db.masterTask.findAll({
        where: {
            taskstatus: req.params.taskstatus
        }
    }).then(function(dbMTask) {
      res.json(dbMTask);
    });
  });



}