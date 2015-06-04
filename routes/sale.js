var express = require("express");
var router = express.Router();
var path = require("path");
var Sales = require('../models/saleSchema');

router.get('/', function(req, res, next){
    return Sales.find({}).exec(function(err, sales){
        if(err){
            console.log(err);
            throw new Error(err);
        }
        console.log("this is the neighbor information", sales);
        res.send(JSON.stringify(sales));
    })
});

router.post('/', function(req, res, next){
    var goods = new Sales (req.body);
    console.log("what is being grabbed from sales form??", req.body);


    goods.save(function(err){
        if(err){
            console.log('sales %s', err);
            next(err);
        }
        console.log("this is the goods.save thing", goods);
        res.send(goods.toJSON());
    });
});

module.exports = router;

