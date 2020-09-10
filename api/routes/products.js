var express = require("express");
var router = express.Router();

module.exports = (knex) => { 
    router.post("/", function(req, res, next) {
    console.log('reached auction post route')

        if (JSON.stringify(req.body) !== '{}' && req.body.name && req.body.price && req.body.qty) {
            knex('products').insert({
                name: req.body.name,
                price: req.body.price,
                qty: req.body.qty
            }).then((response) => {
                console.log('product created')
                res.send(response)
            }).catch((err) => {
                res.send(err)
                console.log(err)      
            }).then().catch()
        } else {
            res.send(err)
        }
    })
    return router
}





