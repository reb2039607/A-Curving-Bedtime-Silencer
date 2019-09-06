const path = require('path');
const passport = require('passport');
const db = require("../models");

module.exports = function(app) {

  app.post("/login",
    passport.authenticate("local", { failureRedirect: "/login.html" }),
    function(req, res) {
      res.redirect("/createTask.html");
    }
  );

  app.post("/signup", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      fullname: req.body.fullname
    }).then(function(dbUser) {
      res.redirect("/login.html");
    });
  });

  app.post("/auth", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      db.User.findOne({
        where: {
          username: username,
          password: password
        }
      }).then(function(response) {
        if (response) {
          req.session.loggedin = true;
          req.session.username = username;

console.log("here");

          // THIS IS WHERE THE CHANGE HAPPENED!
          res.redirect('/index.html');
          //return username;
      } else {
          res.send('Incorrect Username and/or Password!');
      }
      res.end();
    });
  } else {
    res.send("Please enter Username and Password!");
    res.end();
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login.html");
  });

  app.get(
    "/profile",
    require("connect-ensure-login").ensureLoggedIn(),
    function(req, res) {
      res.render('/index.html', { username: req.user.username });
    }
  );
};
