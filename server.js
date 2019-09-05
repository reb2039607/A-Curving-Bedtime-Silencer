const mysql = require("mysql");
const express = require("express");
const path = require("path");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const db = require("./models");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

passport.use(
  new Strategy(function(username, password, cb) {
    db.users.findOne(username, function(err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

const app = express();

app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/login-routes.js")(app);
require("./routes/task-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
