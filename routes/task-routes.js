var db = require("../models");
module.exports = function(app) {
  app.get("/api/alltasks/", (req, res) => {
    db.masterTask.findAll({}).then(function(allTasks) {
      res.json(allTasks);
    });
  });
  app.post("/api/createtasks/", function(req, res) {
    db.masterTask.create(req.body).then(function(task) {
      res.json(task);
    });
  });
};
