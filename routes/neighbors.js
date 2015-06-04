var express = require("express");
var router = express.Router();
var path = require("path");
var mongoose = require('mongoose');
var Neighbors = require('../models/neighborSchema');

//router.post
//router.get -> /neighbor

router.post('/neighbors', function(req, res, next){
    var people = new Neighbors;


    people.save(function(err){
        if(err) console.log('people %s', err);

        res.send(people.toJSON());
        next();
    });
});

router.get('/neighbors', function(req, res, next){
    return Neighbors.find({}).exec(function(err, neighbors){
        if(err) throw new Error(err);

        res.send(JSON.stringify(neighbors));
        next();
    })
});





module.exports = router;