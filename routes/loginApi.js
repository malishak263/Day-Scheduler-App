var express = require('express');
var userAccounts = require('../models/userAccounts');
var router = express.Router();


router.post('/', (req, res) => {

    var login = (username, password) => {

        var result = {};
        try {

            userAccounts.find({ username: username, password: password }, (err, resp) => {
                if (err) {
                    console.log(err.message);
                }

                if (resp.length > 0) {
                    result = {
                        success: true,
                        who_is_logged: { username: username, password: password },
                        message: `${username} is now logged in!`
                    }
                    res.json(result);
                    console.log(result);
                } else {
                    result = {
                        success: false,
                        message: `login failed, please create account!`
                    }
                    res.json(result);
                    console.log(result);
                }


            });
        } catch (err) {
            console.log(err);
        }
    }
    console.log(req.body.username);

    login(req.body.username, req.body.password);
});

module.exports = router;