var express = require('express');
var router = express.Router();
var passport = require ('passport');
var path = require('path');
var Users = require('../models/userSchema.js');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
});


///* GET /users listing. */
//router.get('/', function(req, res, next) {
//    Users.find(function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});

/* POST /users */
router.post('/', function(req, res, next) {
    Users.create(req.body, function (err, post) {
        if (err)
            return next(err);
        else
            res.redirect('/');
    });
});

///* POST /users */
//router.post('/', function(req, res, next) {
//    Users.create(req.body, function (err, post) {
//        if (err)
//        {console.log(err); return next(err)};
//        res.json(post);
//    });
//});

///* GET /users/:id */
//router.get('/:id', function(req, res, next) {
//    Users.findById(req.params.id, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* PUT /users/:id */
//router.put('/:id', function(req, res, next) {
//    Users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* DELETE /users/:id */
//router.delete('/:id', function(req, res, next) {
//    Users.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

console.log('register.js loaded');

module.exports = router;
