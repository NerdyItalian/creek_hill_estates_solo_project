var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

//router.get('/', function(req, res, next) {
//    res.json(req.isAuthenticated());
//});
//
//router.post('/', passport.authenticate('local'), function(req, res){
//       console.log("we are in the first part of the post");
//        if (req.isAuthenticated()){
//            console.log("is authenticated");
//            res.redirect('/users');
//        } else {
//            console.log("is not authenticated");
//        }
//    }
//);
//router.post('/',
//    passport.authenticate('local', {
//        successRedirect: '/users',
//        failureRedirect: '/'
//    })
//);

router.post('/', passport.authenticate('local'), function(req, res, next){
    console.log("i am here in home.js", req.body);

    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    var user = {
        username: req.user.username,
        firstName:req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email
    };
    res.json(user);

});

console.log("I am in route/homes.js");
module.exports = router;