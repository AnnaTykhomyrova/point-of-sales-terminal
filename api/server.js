const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 8080
const ENV = process.env.NODE_ENV || "development";
var cors = require("cors");
const knexConfig = require('./knexfile');                   // require environment's settings from knexfile
const knex = require('knex')(knexConfig[ENV]);

var jsonParser = bodyParser.json()

var productsRouter = require('./routes/products')
app.use(cors({credentials: true}));
app.use('/', productsRouter(knex, jsonParser));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})