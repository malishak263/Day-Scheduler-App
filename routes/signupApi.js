var express = require('express');
var userAccounts = require('../models/userAccounts');
var router = express.Router();

router.post('/', (req, res) => {

    //signup function
    var signup = (username, password) => {
        var result = {};
        var newAccount = new userAccounts({
            username: username,
            password: password
        });

        userAccounts.find({ username: username }, (err, resp) => {

            if (err) {
                console.log(err.message);
            }
            if (resp.length == 0) {
                newAccount.save((err, resp) => {

                    if (err) {
                        console.log(err.message);
                    }
                    if (err) {
                        console.log(err);
                    } else {

                        result = {
                            success: true,
                            message: `${username} is successfully saved!`
                        }
                        console.log(result);
                        res.json(result);
                    }
                })
            } else {
                result = {
                    success: false,
                    message: `username is used by another account!`
                }
                console.log(result);
                res.json(result);


            }
        });

    }

    signup(req.body.username, req.body.password);

});

module.exports = router;