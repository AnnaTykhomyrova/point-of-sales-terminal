const express = require('express');
const path = require('path');
var cors = require("cors");
const ENV = process.env.NODE_ENV || "development";
const knexConfig = require('./knexfile');                   // require environment's settings from knexfile
const knex = require('knex')(knexConfig[ENV]);              // connect to DB via knex using env's settings

var port = (process.env.PORT || '8080');
//listing routes
var productsRouter = require('./routes/products')

const app = express();

app.set('port', port);
app.set('view engine', 'html');
app.use(cors({credentials: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));
app.use((req, res, next) => {
    res.sendFile(`/home/anna/pos-terminal/client/build/index.html`);
});

//routers
app.use('/products', productsRouter(knex));

app.listen(port);

module.exports = app;