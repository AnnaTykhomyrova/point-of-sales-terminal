var express = require("express");
var router = express.Router();

module.exports = (knex, jsonParser) => { 
    router.post("/", jsonParser, function(req, res, next) {
        if (JSON.stringify(req.body) !== '{}' && req.body.name && req.body.price && req.body.qty && req.body.order_id && req.body.total_price && req.body.credit_limit) {
            knex('products').insert({
                name: req.body.name,
                price: req.body.price,
                qty: req.body.qty,
                order_id: req.body.order_id,
                total_price: req.body.total_price,
                credit_limit: req.body.credit_limit
            }).then((response) => {
                console.log('product created')
                res.send(response)
            }).catch((err) => {
                res.send(err)
                console.log(err)      
            })
            .then().catch()
        } 
    })

    router.get("/", function(req, res, next) {
        knex
        .select('*')
        .from("products")
        .then((allProducts) => res.json({ allProducts: allProducts }))
        .catch((err) => {
            return res.status(500).json({
                message: err.message,
            })
        })
    })
    return router
}





