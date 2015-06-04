var express = require("express");
var router = express.Router();
var path = require("path");
var Neighbors = require('../models/neighborSchema');

router.get('/', function(req, res, next){
    return Neighbors.find({}).exec(function(err, neighbors){
        if(err){
            console.log(err);
            throw new Error(err);
        }
        console.log("this is the neighbor information", neighbors);
        res.send(JSON.stringify(neighbors));
    })
});

router.post('/', function(req, res, next){
    var people = new Neighbors(req.body);
    console.log("what is being grabbed from form??", req.body)


    people.save(function(err){
        if(err){
            console.log('people %s', err);
            next(err);
        }
        console.log("this is the people.save thing", people);
        res.send(people.toJSON());
    });
});

module.exports = router;