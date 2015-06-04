var express = require('express');
var router = express.Router();
var passport = require ('passport');
var path = require('path');
var Users = require('../models/userSchema.js');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
});

/* POST /users */
router.post('/', function(req, res, next) {
    Users.create(req.body, function (err, post) {
        if (err)
            return next(err);
    });
    res.send("success");
});



console.log('register.js loaded');

module.exports = router;
