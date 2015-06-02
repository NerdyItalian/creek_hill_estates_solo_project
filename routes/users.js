var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/userSchema');

router.get('/', function(req, res, next) {
    console.log("in users.js .get call");
    res.json(req.isAuthenticated());
});

/* GET users listing. */
//router.get('/', function(req, res, next) {
//    passport.authenticate('local', {
//        successRedirect: '/',
//        failureRedirect: '/index'
//    });
//    res.sendFile(path.resolve(__dirname, '../public/views/users.html'));
//});

console.log("i have loaded users.js");
module.exports = router;