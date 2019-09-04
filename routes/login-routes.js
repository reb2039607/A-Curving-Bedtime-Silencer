const passport = require("passport");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
<<<<<<< HEAD
  app.get("/", function(req, res) {
    res.render("index.html", { user: req.user });
=======

app.get('/',
  function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create-task.html"));
>>>>>>> origin/test
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.post(
    "/login",
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
<<<<<<< HEAD
          res.redirect("/createTask.html");
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      });
    } else {
      res.send("Please enter Username and Password!");
=======
          res.redirect('/create-task.html');
      } else {
          res.send('Incorrect Username and/or Password!');
      }
>>>>>>> origin/test
      res.end();
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get(
    "/profile",
    require("connect-ensure-login").ensureLoggedIn(),
    function(req, res) {
      res.render("profile", { user: req.user });
    }
  );
};
