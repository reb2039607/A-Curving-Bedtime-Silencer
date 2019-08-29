
const db = require("../models");

module.exports = function(app) {
/*
    app.get("/auth", function(req, res) {
        db.User.findOne({
            where: {
                username: req.params.username,
                password: req.params.password
            }
        }).then(function(user) {
            if (user) {

            }
        });
    });*/

/*
app.post('/auth', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if(username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(err, response, fields) {
            if (response.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/home');
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});*/

}