var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '/views/routes/home.html'));
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    })
);

console.log("I am in route/homes.js");
module.exports = router;