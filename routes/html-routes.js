<<<<<<< HEAD
const db = require("../models");
const path = require("path");

module.exports = function(app) {
  app.get("/createTask", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createTask.html"));
  });
};
=======
>>>>>>> origin/test
